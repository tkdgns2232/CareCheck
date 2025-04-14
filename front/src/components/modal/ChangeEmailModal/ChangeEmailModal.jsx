/**@jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import * as s from './style';
import { useQueryClient } from '@tanstack/react-query';
import { RiCloseCircleFill } from 'react-icons/ri';
import { CgMail } from 'react-icons/cg';
import { useUpdateEmailMutation } from '../../../mutations/userMutation';
import Swal from 'sweetalert2';

function ChangeEmailModal({setOpen}) {
    const queryClient = useQueryClient();
    const updateEmailMutation = useUpdateEmailMutation();

    const [ emailValue, setEmailValue ] = useState("");
    const [ emailValidMessage, setEmailValidMessage ] = useState("");
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const handleEmailInputOnChange = (e) => {
        setEmailValue(e.target.value);
    }
    useEffect(() => {
        if(!emailValue) {
            setEmailValidMessage("");
        } else if(!emailRegex.test(emailValue)) {
            setEmailValidMessage("올바른 이메일 형식이 아닙니다.");
        } else {
            setEmailValidMessage("");
        }
    }, [emailValue]);

    const handleEmailChangeButtonOnClick = async () => {
        if(!emailValue) {
            Swal.fire({
                icon: "error",
                titleText: "이메일 변경 실패",
                html: "<div style='font-size: 1.5rem'>변경할 이메일을 입력해주세요.</div>",
                confirmButtonText: "<div style='font-size: 1.5rem'>확인</div>",
            });
            return;
        }
        await updateEmailMutation.mutateAsync(emailValue)
        .then(response => {
            Swal.fire({
                icon: "success",
                titleText: "이메일 변경 완료",
                showConfirmButton: false,
                timer: 1000,
            }).then(response => {
                queryClient.invalidateQueries(["userMeQuery"]);
                setOpen(false);
            });
        }).catch(error => {
            Swal.fire({
                icon: "error",
                titleText: "이메일 변경 실패",
                html: "<div style='font-size: 1.5rem'>오류가 발생했습니다. 다시 시도해주세요.</div>",
                confirmButtonText: "<div style='font-size: 1.5rem'>확인</div>",
            }).then(response => {
                setEmailValue("");
            });
        });
    }

    const handleInputOnKeyDown = async (e) => {
        if(e.key === "Enter") {
            await handleEmailChangeButtonOnClick();
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
                <div css={s.headerIcon}><CgMail /></div>
                <h2 css={s.headerTitle}>Set a email address</h2>
                <p css={s.headerMessage}>변경할 이메일 주소를 입력하세요.</p>
            </div>
            <div css={s.main}>
                <div>
                    <input type="email" name='newEmail' 
                        value={emailValue} 
                        onChange={handleEmailInputOnChange} 
                        onKeyDown={handleInputOnKeyDown} 
                        placeholder='Set your email...' 
                    />
                    {!!emailValidMessage && <p>{emailValidMessage}</p>}
                </div>
                <button onClick={handleEmailChangeButtonOnClick} disabled={!!emailValidMessage}>변경</button>
            </div>
        </div>
    );
}

export default ChangeEmailModal;