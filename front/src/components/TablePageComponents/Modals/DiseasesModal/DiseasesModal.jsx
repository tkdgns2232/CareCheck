/**@jsxImportSource @emotion/react */
import * as s from "./style";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import {
  diagnosisDisease,
  openDiseaseModal,
} from "../../../../atoms/doctorTable/doctorTableAtom";
import { useGetSearchDisease } from "../../../../queries/diseaseQuery";
import { RiCloseCircleFill, RiSearch2Line } from "react-icons/ri";

function DiseasesModal({ admissionId }) {
  const [diseaseModalOpen, setDiseaseModalOpen] =
    useRecoilState(openDiseaseModal);
  const [listDiagnosisDisease, setListDiagnosisDisease] =
    useRecoilState(diagnosisDisease);
  const [inputKeyword, setInputKeyword] = useState("");
  const [searchKeyword, setSearchKeyword] = useState(null);
  const [selectDiseases, setSelectDiseases] = useState([]);
  const searchDiseaseByKeyword = useGetSearchDisease(searchKeyword);
  const [newDiagnosis, setNewDiagnosis] = useState({
    admId: admissionId,
    diseaseCode: "",
    diseaseKName: "",
  });
  
  const searchDiseases = searchDiseaseByKeyword?.data?.data || [];
  useEffect(() => {
    setNewDiagnosis({
      admId: admissionId,
      diseaseCode: "",
      diseaseKName: "",
    });
  }, [searchKeyword]);

  const handleSearchKeywordOnChange = (e) => {
    setInputKeyword(e.target.value);
  };

  const handleSearchKeywordOnKeyDown = (e) => {
    if (e.keyCode === 13) {
      setSearchKeyword(inputKeyword);
    }
  };

  const handleSelectDiseases = (disease) => {
    // 새로운 진단 객체 생성
    const newDiagnosis = {
      admId: admissionId,
      diseaseCode: disease.diseaseCode,
      diseaseKName: disease.diseaseKName,
    };

    // 중복 확인 후 상태 배열에 추가
    if (
      !selectDiseases.some(
        (selected) => selected.diseaseCode === newDiagnosis.diseaseCode
      )
    ) {
      setSelectDiseases((prev) => [...prev, newDiagnosis]);
    }
  };

  const handleSaveSearchKeywordOnClick = () => {
    setSearchKeyword(inputKeyword);
  };

  const handleSaveDiseasesOnClick = () => {
    if (selectDiseases.length === 0) {
      return;
    }
    setListDiagnosisDisease([...listDiagnosisDisease, ...selectDiseases]);
    setSelectDiseases([]);
  };

  return (
    <div css={s.container}>
      <div css={s.header}>
        <h2>상병등록</h2>
        <div onClick={() => setDiseaseModalOpen(false)}>
          <RiCloseCircleFill />
        </div>
      </div>
      <div css={s.searchField}>
        <span> 상병명 : </span>
        <input
          type="text"
          value={inputKeyword}
          placeholder="검색기능"
          onChange={handleSearchKeywordOnChange}
          onKeyDown={handleSearchKeywordOnKeyDown}
        />
        <div onClick={handleSaveSearchKeywordOnClick}>
          <RiSearch2Line />
        </div>
      </div>
      <div css={s.mainField}>
        <h3>조회된 상병 : </h3>
        <table>
          <thead>
            <tr>
              <td>상병코드</td>
              <td>상병명</td>
            </tr>
          </thead>
          <tbody>
            {searchDiseases.map((disease) => (
              <tr
                key={disease.diseaseCode}
                onClick={() => handleSelectDiseases(disease)}
              >
                <td>{disease.diseaseCode}</td>
                <td>{disease.diseaseKName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div css={s.selectField}>
        <div css={s.selectFieldHeader}>
          <h3>선택된 상병 : </h3>{" "}
          <button
            onClick={handleSaveDiseasesOnClick}
            disabled={selectDiseases.length === 0}
          >
            <span>전송</span>
          </button>
        </div>
        <table>
          <thead>
            <tr>
              <td>선택코드</td>
              <td>상병명</td>
            </tr>
          </thead>
          <tbody>
            {selectDiseases.map((disease, index) => (
              <tr key={index}>
                <td>{disease.diseaseCode}</td>
                <td>{disease.diseaseKName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DiseasesModal;
