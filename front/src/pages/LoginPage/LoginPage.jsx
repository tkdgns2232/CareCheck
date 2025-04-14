/**@jsxImportSource @emotion/react */
import * as s from './style';
import { useRef, useState } from 'react'
import { RiUser3Fill } from "react-icons/ri";
import { FaLock } from "react-icons/fa";
import Swal from 'sweetalert2';
import { useSigninMutation } from '../../mutations/authMutation';
import { setTokenLocalStorage } from '../../configs/axiosConfig';
import { useNavigate } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';


function LoginPage(){ 
    
    const signinMutation = useSigninMutation();
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const [ inputValue, setInputValue ] = useState({
        usercode: "",
        password: "",
    });

    const [ inputRefs ] = useState([ useRef(), useRef() ]);

    const handleInputOnChange = (e) => {
        setInputValue(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    }

    const isEmpty = () => {
        const isEmptyInBox = Object.values(inputValue).map(value => !!value).includes(false);
        return isEmptyInBox;
    }

    const handleLoginButtonOnClick = async () => {
        if(isEmpty()) {
            Swal.fire({
                icon: "error",
                titleText: "사용자 정보를 다시 확인해주세요",
                confirmButtonText: "<div style='font-size: 1.5rem'>확인</div>",
            });
            return;
        }

        try {
            const response = await signinMutation.mutateAsync(inputValue);
            const tokenName = response.data.name;
            const accessToken = response.data.token;
            setTokenLocalStorage(tokenName, accessToken);
            Swal.fire({
                icon: "success",
                titleText: "로그인 성공",
                html: "<div style='font-size: 1.5rem'>Hello, CareCheck!</div>",
                showConfirmButton: false,
                timer: 700,
            }).then(response => {
                queryClient.invalidateQueries({queryKey: ["userMeQuery"]});
                navigate("/main");
            })
        } catch (error) {
            Swal.fire({
                icon: "error",
                titleText: "사용자 정보를 다시 확인해주세요",
                confirmButtonText: "<div style='font-size: 1.5rem'>확인</div>",
            });
            return;
        }
    }

    const handleLoginInputOnKeyDown = async (e) => {
        if(e.key === 'Enter') {
            let foundIndex = -1;
            for(let i = 0; i < inputRefs.length; i++) {
                if(inputRefs[i].current === e.target) {
                    foundIndex = i;
                    break;
                }
            }
            if(foundIndex === inputRefs.length -1) {
                await handleLoginButtonOnClick();
                return;
            }

            inputRefs[foundIndex + 1].current.focus();
        }
    }
  
    return (
        
        <div css={s.layout}>
            <h1 css={s.title}>CareCheck</h1>
                <div css={s.groupBox}>
                    <div css={s.inputContainer}>
                        <input css={s.inputstyle} type="text" placeholder='사원 번호' 
                        name='usercode' 
                        value={inputValue.usercode}
                        onChange={handleInputOnChange} 
                        onKeyDown={handleLoginInputOnKeyDown}
                        ref={inputRefs[0]}
                        />
                        <RiUser3Fill css={s.iconStyle}/>
                    </div>
                </div>
                <div css={s.groupBox}>
                    <div css={s.inputContainer}>
                        <input css={s.inputstyle} type="password" placeholder='비밀번호' 
                        name='password' 
                        value={inputValue.password} 
                        onChange={handleInputOnChange} 
                        onKeyDown={handleLoginInputOnKeyDown}
                        ref={inputRefs[1]}
                        />
                        <FaLock css={s.iconStyle}/>
                    </div>
                </div>
                <div css={s.groupBox}>
                    <button css={s.button} onClick={handleLoginButtonOnClick}>로그인</button>
                </div>
        </div>
        
    )
}

export default LoginPage;