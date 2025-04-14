/**@jsxImportSource @emotion/react */
import { CgPhone } from 'react-icons/cg';
import * as s from './style';
import { useQueryClient } from '@tanstack/react-query';
import { useUpdatePhoneNumberMutation } from '../../../mutations/userMutation';
import { useEffect, useState } from 'react';
import { RiCloseCircleFill } from 'react-icons/ri';
import Swal from 'sweetalert2';

function ChangePhoneNumberModal({setOpen}) {
    const queryClient = useQueryClient();
    const updatePhoneNumberMutation = useUpdatePhoneNumberMutation();

    const [ phoneNumberValue, setPhoneNumberValue ] = useState("");
    const [ phoneNumberValidMessage, setPhoneNumberValidMessage ] = useState("");
    const phoneNumberRegex = /^010-\d{4}-\d{4}$/;

    const handlePhoneNumberInputOnChange = (e) => {
        setPhoneNumberValue(e.target.value);
    }
    useEffect(() => {
        if(!phoneNumberValue) {
            setPhoneNumberValidMessage("");
        } else if(!phoneNumberRegex.test(phoneNumberValue)) {
            setPhoneNumberValidMessage("올바른 전화번호 형식이 아닙니다. 010-0000-0000 형식으로 작성해주세요.");
        } else {
            setPhoneNumberValidMessage("");
        }
    }, [phoneNumberValue]);

    const handlePhoneNumberChangeButtonOnClick = async () => {
        if (!phoneNumberValue) {
            Swal.fire({
                icon: "error",
                titleText: "전화번호 변경 실패",
                html: "<div style='font-size: 1.5rem'>변경할 전화번호를 입력해주세요.</div>",
                confirmButtonText: "<div style='font-size: 1.5rem'>확인</div>",
            });
            return;
        }
        await updatePhoneNumberMutation.mutateAsync(phoneNumberValue)
        .then(response =>{ 
            Swal.fire({
                icon: "success",
                titleText: "전화번호 변경 완료",
                showConfirmButton: false,
                timer: 1000,
            }).then(response => {
                queryClient.invalidateQueries(["userMeQuery"]);
                setOpen(false);
            });
        }).catch(error =>{
            Swal.fire({
                icon: "error",
                titleText: "전화번호 변경 실패",
                html: "<div style='font-size: 1.5rem'>오류가 발생했습니다. 다시 시도해주세요.</div>",
                confirmButtonText: "<div style='font-size: 1.5rem'>확인</div>",
            }).then(response => {
                setPhoneNumberValue("");
            });
        });
    }

    const handleInputOnKeyDown = async (e) => {
        if(e.key === "Enter") {
            await handlePhoneNumberChangeButtonOnClick();
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
                <div css={s.headerIcon}><CgPhone /></div>
                <h2 css={s.headerTitle}>Set a phone-number</h2>
                <p css={s.headerMessage}>변경할 전화번호를 입력하세요.</p>
            </div>
            <div css={s.main}>
                <div>
                    <input type="text" name='newPhoneNumber' value={phoneNumberValue} onChange={handlePhoneNumberInputOnChange} onKeyDown={handleInputOnKeyDown} placeholder='ex) 010-1234-5678' />
                    {!!phoneNumberValidMessage && <p>{phoneNumberValidMessage}</p>}
                </div>
                <button onClick={handlePhoneNumberChangeButtonOnClick} disabled={!!phoneNumberValidMessage}>변경</button>
            </div>
        </div>
    );
}

export default ChangePhoneNumberModal;