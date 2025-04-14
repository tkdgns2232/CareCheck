/**@jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import * as s from './style';
import { RiCloseCircleFill } from 'react-icons/ri';
import { CgUserlane } from 'react-icons/cg';
import { useUpdateUserMutation } from '../../../../mutations/userMutation';
import Swal from 'sweetalert2';
import { useQueryClient } from '@tanstack/react-query';

function ChangeUserModal({setOpen, user}) {
    const queryClient = useQueryClient();
    const updateUserMutation = useUpdateUserMutation();

    const [ inputValue, setInputValue ] = useState({
        usercode: "",
        username: "",
        email: "",
        phoneNumber: "",
    });

    // user 값이 바뀔 때 마다 바뀐 user 값으로 렌더링
    useEffect(() => {
        setInputValue(prev => ({
            ...prev,
            usercode: user.usercode,
            username: user.username,
            email: user.email,
            phoneNumber: user.phoneNumber,
        }));
    }, [user]);

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneNumberRegex = /^010-\d{4}-\d{4}$/;
    const [ emailValidMessage, setEmailValidMessage ] = useState("");
    const [ phoneNumberValidMessage, setPhoneNumberValidMessage ] = useState("");

    const handleInputOnChange = (e) => {
        setInputValue(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    }

    // 변경 버튼 disabled 를 위한 함수 - 변경사항이 없으면 변경 X, 이메일과 전화번호가 정규형에 맞지 않으면 변경 X
    const isDisabled = () => {
        // keys: 해당 객체의 키값 찾는 Object의 메서드
        // some: 찾고자 하는 값이 있는지 boolean 타입으로 반환
        // isChanged: inputValue의 key값으로 user와 값을 각각 비교하여 변경된 값이 하나라도 있으면 true, 없으면 false 반환
        const isChanged = Object.keys(inputValue).some(key => inputValue[key] !== user[key]);
        const isInValid = !!emailValidMessage || !!phoneNumberValidMessage; // 이메일, 전화번호 둘 중 하나라도 invalid 값이면 true 반환
        return !isChanged || isInValid;
    }

    useEffect(() => {
        if (!inputValue.email) {
          setEmailValidMessage(""); // 빈 값이면 에러 메시지 제거
        } else if (!emailRegex.test(inputValue.email)) {
          setEmailValidMessage("올바른 이메일 형식이 아닙니다.");
        } else {
          setEmailValidMessage(""); // 올바른 값이면 에러 메시지 제거
        }
    }, [inputValue.email]);
    useEffect(() => {
        if (!inputValue.phoneNumber) {
            setPhoneNumberValidMessage("");
        } else if (!phoneNumberRegex.test(inputValue.phoneNumber)) {
            setPhoneNumberValidMessage("올바른 전화번호 형식이 아닙니다. 010-0000-0000 형식으로 작성해주세요.");
        } else {
            setPhoneNumberValidMessage("");
        }
    }, [inputValue.phoneNumber]);
      
    const handleChangeButtonOnClick = async () => {
        // 빈 값인 경우 return
        if(Object.values(inputValue).map(value => !!value).includes(false)) {
            Swal.fire({
                icon: "error",
                title: "빈 값은 존재할 수 없습니다.",
                confirmButtonText: "<div style='font-size: 1.3rem'>확인</div>",
            });
            return;
        }

        Swal.fire({
            icon: "warning",
            title: "정말 바꾸시겠습니까?",
            showDenyButton: true,
            confirmButtonText: "<div style='font-size: 1.3rem'>변경</div>",
            denyButtonText: "<div style='font-size: 1.3rem'>취소</div>",
            reverseButtons: true,
        }).then((result) => {
            if (result.isConfirmed) {
                updateUserMutation.mutateAsync({
                    usercode: inputValue.usercode, 
                    username: inputValue.username, 
                    email: inputValue.email,
                    phoneNumber: inputValue.phoneNumber
                }).then(response => {
                    Swal.fire({
                        icon: "success",
                        titleText: "변경 완료",
                        showConfirmButton: false,
                        timer: 1000,
                    }).then(response => {
                        queryClient.invalidateQueries(["useGetSearchUserList"]);
                        queryClient.invalidateQueries(["userMeQuery"]);
                        setOpen(false);
                    });
                }).catch(error => {
                    Swal.fire({
                        icon: "error",
                        titleText: "변경 실패",
                        html: `<div style='font-size: 1.5rem'>${error.response.data}</div>`,
                        confirmButtonText: "<div style='font-size: 1.3rem'>확인</div>",
                    }).then(response => {
                        setOpen(false);
                    });
                });
            };
        });
        
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
                <div css={s.headerIcon}><CgUserlane /></div>
                <h2 css={s.headerTitle}>Set user information</h2>
                <p css={s.headerMessage}>직원 정보 수정</p>
            </div>
            <div css={s.main}>
                <div css={s.inputBox}>
                    <label htmlFor="usercode">사원번호</label>
                    {/* 사원번호는 변경할 수 없도록 input에 disabled 걸어주었음 */}
                    <input type="text" name='usercode' value={inputValue.usercode} disabled={true} />
                </div>
                <div css={s.inputBox}>
                    <label htmlFor="username">직원이름</label>
                    <input type="text" name='username' value={inputValue.username} onChange={handleInputOnChange} />
                </div>
                <div css={s.inputBox}>
                    <label htmlFor="email">이메일</label>
                    <input type="text" name='email' value={inputValue.email} onChange={handleInputOnChange} />
                </div>
                {
                    !!emailValidMessage &&
                    <div css={s.errorMessage}>
                        <p>{emailValidMessage}</p>
                    </div>
                }
                <div css={s.inputBox}>
                    <label htmlFor="phoneNumber">휴대전화</label>
                    <input type="text" name='phoneNumber' value={inputValue.phoneNumber} onChange={handleInputOnChange} />
                </div>
                {
                    !!phoneNumberValidMessage &&
                    <div css={s.errorMessage}>
                        <p>{phoneNumberValidMessage}</p>
                    </div>
                }
                <div css={s.changeButtonBox}>
                    <button css={s.changeButton} onClick={handleChangeButtonOnClick} disabled={isDisabled()}>변경</button>
                </div>
            </div>
        </div>
    );
}

export default ChangeUserModal;