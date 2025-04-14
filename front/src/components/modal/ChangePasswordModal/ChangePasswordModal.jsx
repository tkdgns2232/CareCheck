/**@jsxImportSource @emotion/react */
import { CgPassword } from 'react-icons/cg';
import * as s from './style';
import { RiCloseCircleFill } from 'react-icons/ri';
import { useEffect, useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { useUpdatePasswordMutation } from '../../../mutations/userMutation';
import Swal from 'sweetalert2';

function ChangePasswordModal({setOpen}) {
    const queryClient = useQueryClient();
    const updatePasswordMutation = useUpdatePasswordMutation();

    const [ inputValue, setInputValue ] = useState({
        currentPassword: "",
        newPassword: "",
        newPasswordCheck: "",
    });

    const passwordRegex = /^.{4,}$/;
    const [ passwordValidMessage, setPasswordValidMessage ] = useState("");

    const handleInputOnChange = (e) => {
        setInputValue(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }

    useEffect(() => {
        if(!inputValue.newPassword) {
          setPasswordValidMessage("");
        } else if (!passwordRegex.test(inputValue.newPassword)) {
          setPasswordValidMessage("4자리 이상 입력해주세요.")
        } else {
          setPasswordValidMessage("");
        }
    });

    const isError = () => {
        const isEmpty = Object.values(inputValue).map(value => !!value).includes(false);
        const notSame = inputValue.newPassword !== inputValue.newPasswordCheck;

        return isEmpty || notSame || !!passwordValidMessage;
    }

    const handlePasswordChangeButtonOnClick = async () => {
        updatePasswordMutation.mutateAsync({currentPassword: inputValue.currentPassword, newPassword: inputValue.newPassword})
        .then(response => {
            Swal.fire({
                icon: "success",
                titleText: "비밀번호 변경 완료",
                showConfirmButton: false,
                timer: 1000,
            }).then(response => {
                queryClient.invalidateQueries(["userMeQuery"]);
                setOpen(false);
            });
        }).catch(error => {
            Swal.fire({
                icon: "error",
                titleText: "비밀번호 변경 실패",
                html: "<div style='font-size: 1.5rem'>입력 정보를 다시 확인해주세요</div>",
                confirmButtonText: "<div style='font-size: 1.5rem'>확인</div>",
            }).then(response => {
                setInputValue({
                    currentPassword: "",
                    newPassword: "",
                    newPasswordCheck: "",
                });
            });
        })
    }

    const handleInputOnKeyDown = async (e) => {
        if(e.key === "Enter") {
            await handlePasswordChangeButtonOnClick();
        }
    }

    const handleCloseButtonOnClick = () => {
        setOpen(false);
    }

    return (
        <div>
            <div css={s.modalTop}>
                <div onClick={handleCloseButtonOnClick}><RiCloseCircleFill /></div>
            </div>
            <div css={s.header}>
                <div css={s.headerIcon}><CgPassword /></div>
                <h2 css={s.headerTitle}>Set your password</h2>
                <p css={s.headerMessage}>변경할 비밀번호를 입력하세요.</p>
            </div>
            <div css={s.main}>
                <div css={s.passwordBox}>
                    <input type="password" name='currentPassword' value={inputValue.currentPassword} onChange={handleInputOnChange} placeholder='현재 비밀번호' />
                </div>
                <div css={s.passwordBox}>
                    <input type="password" name='newPassword' value={inputValue.newPassword} onChange={handleInputOnChange} placeholder='새 비밀번호 (4자리 이상)' />
                </div>
                {
                    !!passwordValidMessage &&
                    <div css={s.errorMessage}>
                        <p>{passwordValidMessage}</p>
                    </div>
                }
                <div css={s.newPasswordCheckBox}>
                    <input type="password" name='newPasswordCheck' value={inputValue.newPasswordCheck} onChange={handleInputOnChange} onKeyDown={handleInputOnKeyDown} placeholder='새 비밀번호 확인' />
                    <button onClick={handlePasswordChangeButtonOnClick} disabled={isError()}>변경</button>
                </div>
                {
                    inputValue.newPassword !== inputValue.newPasswordCheck &&
                    <div css={s.errorMessage}>
                        <p>새 비밀번호와 일치하지 않습니다</p>
                    </div>
                }
                
            </div>
        </div>
    );
}

export default ChangePasswordModal;