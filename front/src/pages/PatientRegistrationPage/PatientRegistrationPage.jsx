/**@jsxImportSource @emotion/react */
import * as s from './style';
import { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { usePatientMutation } from '../../mutations/patientMutation';
import { useNavigate } from 'react-router-dom';

function PatientRegistrationPage(props) {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const patientMutation = usePatientMutation();

    const [ patientData, setPatientData ] = useState({
        patientName: "",
        regidentNum: "",
        phoneNumber: "",
    });

    const handlePatientOnChange = (e) => {
        setPatientData(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const validateInputs = () => {
        const patientNameRegex = /^[a-zA-Z가-힣]{2,}$/; // 이름 형식 (2글자 이상)
        const regidentNumRegex = /^(?:[0-9]{2})(?:0[1-9]|1[0-2])(?:0[1-9]|[12][0-9]|3[01])-[1-4][0-9]{6}$/; // 주민번호 형식 (6자리-7자리)
        const phoneNumberRegex = /^\d{3}-\d{3,4}-\d{4}$/; // 휴대폰 번호 형식 (xxx-xxxx-xxxx)

        if(!patientNameRegex.test(patientData.patientName)){
            Swal.fire({
                icon: 'error',
                title: '이름 형식이 올바르지 않습니다. 두 글자 이상 입력하세요',
                confirmButtonColor: '#d33',
                confirmButtonText: "<div style='font-size: 1.5rem'>확인</div>",
            });
            return false;
        }

        if (!regidentNumRegex.test(patientData.regidentNum)) {
            Swal.fire({
                icon: 'error',
                title: '주민등록번호 형식이 올바르지 않습니다. (예: 990919-1111111)',
                confirmButtonColor: '#d33',
                confirmButtonText: "<div style='font-size: 1.5rem'>확인</div>",
            });
            return false;
        }

        if (!phoneNumberRegex.test(patientData.phoneNumber)) {
            Swal.fire({
                icon: 'error',
                title: '휴대폰 번호 형식이 올바르지 않습니다. (예: 010-1234-5678)',
                confirmButtonColor: '#d33',
                confirmButtonText: "<div style='font-size: 1.5rem'>확인</div>",
            });
            return false;
        }
        return true;
    }

    const handleSubmitOnClick = async () => {
        if (!validateInputs()) return;
        
        
        try {
            const response = await patientMutation.mutateAsync(patientData);
            Swal.fire({
                icon: "success",
                title: "환자 등록 완료!",
                html: "<div style='font-size: 1.5rem'>환자 정보가 성공적으로 등록되었습니다.</div>",
                showConfirmButton: false,
                timer: 1000,
            });

            queryClient.invalidateQueries(["patients"]);

            setPatientData({ patientName: "", regidentNum: "", phoneNumber: "" });
            navigate("/patient/medical-reception", { state: { patientId: response.patientId } });
        } catch (error){
                Swal.fire({
                    icon: "error",
                    title: "환자 등록 실패",
                    html: "<div style='font-size: 1.5rem'>" + error.message + "</div>",
                    confirmButtonColor: "#d33",
                    confirmButtonText: "<div style='font-size: 1.5rem'>확인</div>",
                });
            }
    };

    return (
        <>
            <div css={s.layout}>
                <div>
                <header css={s.titleGroup}>
                    <h2 css={s.title1}>CareCheck</h2>
                    <p css={s.title2}>환자 등록</p>
                </header>
                <main css={s.inputGroup}>
                    <div css={s.inputLineGroup}>
                        <div css={s.input2}>
                            <label htmlFor="patientName" css={{ wordSpacing: '3rem' }}>이 름</label>
                            <input 
                                type="text"
                                name="patientName"
                                value={patientData.patientName}
                                onChange={handlePatientOnChange}    
                            />
                        </div>
                    </div>
                    <div css={s.inputLineGroup}>
                        <div css={s.input2}>
                            <label htmlFor="regidentNum">주민번호</label>
                            <input 
                                type="text"
                                name="regidentNum" 
                                value={patientData.regidentNum}
                                onChange={handlePatientOnChange}
                                placeholder='950915-1111111'
                            />
                        </div>
                    </div>
                    <div css={s.inputLineGroup}>
                        <div css={s.input2}>
                            <label htmlFor="phoneNumber">휴대전화</label>
                            <input 
                                type="text"
                                name="phoneNumber" 
                                value={patientData.phoneNumber}
                                onChange={handlePatientOnChange}
                                placeholder='010-1234-5678' />
                        </div>
                    </div>
                </main>
                <footer css={s.button}>
                    <button onClick={handleSubmitOnClick} >
                        등록
                    </button>
                </footer>
                </div>
            </div>
        </>
    );
};

export default PatientRegistrationPage;