/**@jsxImportSource @emotion/react */
import { useGetSearchAdmissionListByParams } from "../../queries/admissionQuery";
import * as s from "./style";
import { useEffect, useState } from "react";

function ReceiptListPage() {
  const [searchPatientName, setSearchPatientName] = useState("");
  const [searchRegidentNum, setSearchRegidentNum] = useState("");
  const [admissionApiParams, setAdmissionApiParams] = useState({
    patientName: "",
    regidentNum: "",
  });

  const getAdmissionList =
    useGetSearchAdmissionListByParams(admissionApiParams);

  useEffect(() => {
    if (!searchPatientName.trim()) {
      setSearchRegidentNum("");
    }
  }, [searchPatientName]);

  const handleInputNameValueOnChange = (e) => {
    setSearchPatientName(e.target.value);
  };

  const handleInputRegidentNumValueOnChange = (e) => {
    setSearchRegidentNum(e.target.value);
  };

  const handleSearchRequestOnKeyDown = (e) => {
    if (e.key === "Enter") {
      setAdmissionApiParams({
        patientName: searchPatientName,
        regidentNum: searchRegidentNum,
      });
    }
  };

  return (
    <div css={s.layout}>
      <div css={s.header}>
        <h2>수납 명단 조회</h2>
        <div>
          <input
            type="text"
            placeholder="이름 검색"
            value={searchPatientName}
            onChange={handleInputNameValueOnChange}
            onKeyDown={handleSearchRequestOnKeyDown}
          />
          <input
            type="text"
            placeholder="주민번호(추가필터)"
            value={searchRegidentNum}
            onChange={handleInputRegidentNumValueOnChange}
            onKeyDown={handleSearchRequestOnKeyDown}
            disabled={!searchPatientName}
          />
        </div>
      </div>
      <div css={s.main}>
        <table css={s.bodytable}>
          <thead>
            <tr>
              <td>환자번호</td>
              <td>환자명</td>
              <td>주민번호</td>
              <td>연락처</td>
              <td>진료일자</td>
              <td>수납비용</td>
              <td>영수증조회</td>
              <td>내역서조회</td>
            </tr>
          </thead>
          <tbody>
            {getAdmissionList?.data?.isLoading ? (
              <tr>
                <td colSpan="7">로딩 중...</td>
              </tr>
            ) : (
              getAdmissionList?.data?.data.map((item) => (
                <tr key={item.admId}>
                  <td>{item.patientId}</td>
                  <td>{item.patientName}</td>
                  <td>{item.regidentNum}</td>
                  <td>{item.phoneNum}</td>
                  <td>{item.admDate}</td>
                  <td>{item.totalPay.toLocaleString("ko-KR")}원</td>
                  <td>
                    <button
                      onClick={() =>
                        window.open(
                          `/admission/${item.admId}/certificate`,
                          "_blank"
                        )
                      }
                    >
                      영수증
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() =>
                        window.open(
                          `/admission/${item.admId}/detailbill`,
                          "_blank"
                        )
                      }
                    >
                      내역서
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ReceiptListPage;
