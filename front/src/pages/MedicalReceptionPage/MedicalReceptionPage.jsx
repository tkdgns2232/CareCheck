/**@jsxImportSource @emotion/react */
import * as s from "./style";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Select from 'react-select';
import Swal from "sweetalert2";
import { useAdmissionMutation } from "../../mutations/admissionMutation";

function MedicalReceptionPage(props) {
  const admissionMutation = useAdmissionMutation();
  const location = useLocation();
  const { patientId } = location.state || {};

  const [ clinicData, setClinicData] = useState({
    patientId: patientId || '',
    clinicDeft: null,
    usercode: null,
  });

  const clinicDeftOptions = [
    { value: '소아과', label:'소아과'},
    { value: '내과', label: '내과'}
  ];

  const usercodeOptions = [
    { value: '2025020003', label: '거북이'},
    { value: '2025020004', label: '두루미'},
    { value: '2025020005', label: '김둘리'}
  ]

  const isError = () => {
    const isEmptyInput = clinicData.patientId === "";
    const isNotSelected = Object.values(clinicData).map(value => !!value).includes(false);

    return isEmptyInput || isNotSelected;
  }

  const handleAdmissionListOnClick = async () => {
    if(isError()) {
      Swal.fire({
        icon: "error",
        title: "접수 등록 실패",
        html: "<div style='font-size: 1.5rem'>값을 모두 입력해주세요.</div>",
        confirmButtonText: "<div style='font-size: 1.5rem'>확인</div>",
      });
      return;
    }

    Swal.fire({
      icon: "question",
      title: "아래의 정보로 등록하시겠습니까?",
      html: `<div style='font-size:1.5rem'>환자 번호: ${clinicData.patientId} <br>진료과: ${clinicData.clinicDeft} <br>담당 의사: ${usercodeOptions.find(option => option.value === clinicData.usercode).label}</div>`,
      showDenyButton: true,
      confirmButtonText: "<div style='font-size: 1.5rem'>확인</div>",
      denyButtonText: "<div style='font-size: 1.5rem'>취소</div>",
      reverseButtons: true
    }).then(response => {
      if(response.isConfirmed){
        admissionMutation.mutateAsync(clinicData)
          .then(response => {
            Swal.fire({
              icon: "success",
              title: "접수 등록 완료!",
              showConfirmButton: false,
              timer: 1000,
            }).then(() => {
              setClinicData({ patientId: "", clinicDeft: null, usercode: null})
            })
          }).catch(error => {
            Swal.fire({
              icon: "error",
              title: "진료 접수 실패",
              html: `<div style='font-size: 1.5rem'>${error.response.data}</div>`,
              confirmButtonText: "<div style='font-size: 1.5rem'>확인</div>"
            });
          });
      }
    })

  } 

  const handleReceptiOnChange = (e) => {
    setClinicData(prev => ({ 
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleClinicOnChange = (selectedOption, actionMeta) => {
    setClinicData((prev) => ({
      ...prev,
      [actionMeta.name]: selectedOption ? selectedOption.value : null,
    }));
  };

  return (
    <>
      <div css={s.layout}>
        <div css={s.titleGroup}>
            <h1 css={s.title1}>CareCheck</h1>
            <p css={s.title2}>진료 접수</p>
        </div>
        <main css={s.inputGroup}>
          <div css={s.input}>
            <label css={s.inputNum} htmlFor="chartNumber">환자 번호</label>
            <input 
              type="text" 
              name="patientId" 
              value={clinicData.patientId} 
              onChange={handleReceptiOnChange} 
            />
          </div>
          <div css={s.input}>
            <label htmlFor="department">진료과</label>
            <Select 
            type="text" 
            name="clinicDeft" 
            options={clinicDeftOptions}
            value={clinicData.clinicDeft ? clinicDeftOptions.find(option => option.value === clinicData.clinicDeft) : null} 
            onChange={handleClinicOnChange}
            placeholder="진료과 선택"
            />
          </div>
          <div css={s.input}>
            <label htmlFor="exaggeration">담당 의사</label>
            <Select
            type="text" 
            name="usercode"
            options={usercodeOptions} 
            value={clinicData.usercode ? usercodeOptions.find(option => option.value === clinicData.usercode) : null} 
            onChange={handleClinicOnChange}
            placeholder="담당 의사 선택"
            />
            </div>
        </main>
        <footer css={s.button}>
            <button onClick={handleAdmissionListOnClick}>등록</button>
        </footer>
      </div>
    </>
  );
}

export default MedicalReceptionPage;