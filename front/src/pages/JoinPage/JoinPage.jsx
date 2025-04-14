/**@jsxImportSource @emotion/react */
import Swal from 'sweetalert2';
import { useSignupMutation } from '../../mutations/userMutation';
import * as s from './style';
import { useEffect, useState } from 'react';

function JoinPage(props) {
  const signupMutation = useSignupMutation();

  const [ roleValue, setRoleValue] = useState(0);
  const [ inputValue, setInputValue ] = useState({
    username: "",
    password: "",
    email: "",
    phoneNumber: "",
    roleId: roleValue,
  });

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const phoneNumberRegex = /^010-\d{4}-\d{4}$/;
  const passwordRegex = /^.{4,}$/;
  const [ emailValidMessage, setEmailValidMessage ] = useState("");
  const [ phoneNumberValidMessage, setPhoneNumberValidMessage ] = useState("");
  const [ passwordValidMessage, setPasswordValidMessage ] = useState("");
  
  const isError = () => {
    const isEmpty = Object.values(inputValue).map(value => !!value).includes(false); // 필요한 값 모두 작성하였는지 확인 (숫자 타입인 roleId 는 0 인 경우 빈 값으로 처리됨)
    return isEmpty; // boolean 타입으로 반환
  }

  const handleInputValueOnChange = (e) => {
    setInputValue(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
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
  
  useEffect(() => {
    if(!inputValue.password) {
      setPasswordValidMessage("");
    } else if (!passwordRegex.test(inputValue.password)) {
      setPasswordValidMessage("4자리 이상 입력해주세요.")
    } else {
      setPasswordValidMessage("");
    }
  }, [inputValue.password]);

  const handleSelectRoleOnChange = (e) => {
    const getRoleId = Number(e.target.value); // e.target.value 는 String 으로 받아오기 때문에 숫자로 저장하기 위해서는 Number 로 강제 지정해줘야함
    setRoleValue(getRoleId);
    setInputValue(prev => ({ // inputValue 을 같이 set 해줘야 roleId 값이 inputValue 값에도 업데이트 됨
      ...prev,
      roleId: getRoleId,
    }));
  }

  const handleJoinButtonOnClick = async () => {
    if(isError()) {
      Swal.fire({
        icon: "error",
        titleText: "사원 등록 정보를 입력해주세요.",
        confirmButtonText: "<div style='font-size: 1.5rem'>확인</div>"
      });
      return;
    }

    await signupMutation.mutateAsync({
      username: inputValue.username,
      password: inputValue.password,
      email: inputValue.email,
      phoneNumber: inputValue.phoneNumber,
      roleId: roleValue,
    }).then(response => {
      Swal.fire({
        icon: "success",
        titleText: "직원 등록 완료",
        confirmButtonText: "<div style='font-size: 1.5rem'>확인</div>"
      }).then(response => {
        setRoleValue(0);
        setInputValue({
          username: "",
          password: "",
          email: "",
          phoneNumber: "",
          roleId: roleValue,
        });
      });
    }).catch(error => {
      Swal.fire({
        icon: "error",
        titleText: "직원 등록 실패",
        text: "오류가 발생했습니다. 다시 시도해주세요.",
        confirmButtonText: "<div style='font-size: 1.5rem'>확인</div>"
      });
    })
  }

  return (
    <div css={s.layout}>
      <div>
        <header css={s.titleGroup}>
          <h1 css={s.title1}>CareCheck</h1>
          <p css={s.title2}>사원등록</p>
        </header>
        <main css={s.inputGroup}>
          <div css={s.input}>
            <label htmlFor="name">이름</label>
            <div>
              <input type="text" name='username' value={inputValue.username} onChange={handleInputValueOnChange} />
            </div>
          </div>
          <div css={s.input}>
            <label htmlFor="password">비밀번호</label>
            <div>
              <input type="password" name='password' value={inputValue.password} onChange={handleInputValueOnChange} />
              {!!passwordValidMessage && <p>{passwordValidMessage}</p>}
            </div>
          </div>
          <div css={s.input}>
            <label htmlFor="email">이메일</label>
            <div>
              <input type="email" name='email' value={inputValue.email} onChange={handleInputValueOnChange} />
              {!!emailValidMessage && <p>{emailValidMessage}</p>}
            </div>
          </div>
          <div css={s.input}>
            <label htmlFor="phoneNumber">휴대전화</label>
            <div>
              <input type="text" name='phoneNumber' value={inputValue.phoneNumber} onChange={handleInputValueOnChange} placeholder='010-1234-5678' />
              {!!phoneNumberValidMessage && <p>{phoneNumberValidMessage}</p>}
            </div>
          </div>
          <div css={s.input2}>
            <label htmlFor="authority">권한</label>
            <select name='selectRole' onChange={handleSelectRoleOnChange}>
              <option value={0}>권한선택</option>
              <option value={1}>관리자</option>
              <option value={2}>의사</option>
              <option value={3}>간호사</option>
              <option value={4}>원무</option>
            </select>
          </div>
        </main>
        <footer css={s.button}>
          <button onClick={handleJoinButtonOnClick}>등록</button>
        </footer>
      </div>
    </div>
  );
}

export default JoinPage;