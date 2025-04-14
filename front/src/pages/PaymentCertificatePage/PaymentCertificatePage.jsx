/**@jsxImportSource @emotion/react */
import * as s from "./style";
import { useEffect, useState } from "react";
import {
  useGetSearchPatientInfo,
  useGetSearchTotalPay,
} from "../../queries/admissionQuery";
import { useNavigate, useParams } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { IoFingerPrintOutline } from "react-icons/io5";
import { PDFViewer } from "@react-pdf/renderer";
import PaymentDocument from "../../components/PDFCreater/PaymentDocument";
import { createRoot } from "react-dom/client";

function PaymentCertificatePage(props) {
  const queryClient = useQueryClient();
  const userInfo = queryClient.getQueryData(["userMeQuery"]);
  const navigate = useNavigate();
  const param = useParams();
  const [searchPatientData, setSearchPatientData] = useState({
    admissionId: param.admissionId,
    patientId: null,
    clinicDeft: null,
  });

  const searchPatientInfoByAdmId = useGetSearchPatientInfo(
    Number(param.admissionId)
  );
  const handleOpenPDF = () => {
    const newWindow = window.open("", "_blank", "width=1000,height=900");

    const container = newWindow.document.createElement("div");
    newWindow.document.body.appendChild(container);

    const root = createRoot(container);
    root.render(
      <PDFViewer width="100%" height="100%">
        <PaymentDocument
          searchPatientData={searchPatientData}
          dateString={dateString}
          totalPayAdmId={totalPayAdmId?.data?.data || 0}
          username={userInfo?.data?.username}
        />
      </PDFViewer>
    );
  };
  const searchPatientInfoByAdmApi = searchPatientInfoByAdmId?.data?.data;
  useEffect(() => {
    if (!!searchPatientInfoByAdmApi) {
      setSearchPatientData((prev) => ({
        ...prev,
        admissionId: searchPatientInfoByAdmApi.admId,
        patientId: searchPatientInfoByAdmApi.patientId,
        clinicDeft: searchPatientInfoByAdmApi.clinicDeft,
      }));
    }
  }, [param.admissionId, searchPatientInfoByAdmApi]);

  const admPatientInfoAdmId = useGetSearchPatientInfo(
    Number(param.admissionId),
    {
      enabled: !!param.admissionId,
    }
  );
  const admPatientInfoData = admPatientInfoAdmId?.data?.data || {};

  const totalPayAdmId = useGetSearchTotalPay(Number(param.admissionId), {
    enabled: !!param.admissionId,
  });

  const today = new Date();
  const dateString = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const handleDetailBill = (admissionId) => {
    navigate(`/admission/${admissionId}/detailBill`);
  };

  return (
    <>
      <div css={s.layout}>
        <table css={s.table}>
          <tbody>
            <tr>
              <td colSpan="4" css={s.headerTitle}>
                영 수 증
              </td>
            </tr>
            <tr>
              <td css={s.title}>차트번호</td>
              <td>{admPatientInfoData.patientId}</td>
              <td css={s.title}>진 료 과</td>
              <td>{admPatientInfoData.clinicDeft}</td>
            </tr>
            <tr>
              <td css={s.title}>영 수 액</td>
              <td colSpan="3" css={s.money}>
                <span>
                  일금 {(totalPayAdmId?.data?.data || 0).toLocaleString()}원
                </span>
              </td>
            </tr>
            <tr>
              <td css={s.title2}>내 용</td>
              <td colSpan="3"></td>
            </tr>
            <tr>
              <td colSpan="4" css={s.note}>
                <span>위 금액을 영수함</span>
                <div css={s.note}>
                  <span> {dateString} </span>
                </div>
                <div css={s.checkSpace}>
                  <span>
                    담당확인: {userInfo?.data?.username}
                    <IoFingerPrintOutline />
                  </span>
                </div>
                <div css={s.left}>
                  <div>
                    이 계산서는 소득공제 납입 증명서로 사용할 수 있습니다.
                  </div>
                  <div>담당자 확인이 없는 것은 무효입니다.</div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div css={s.button}>
          <button onClick={() => handleDetailBill(param.admissionId)}>
            세부내역서
          </button>
          <button onClick={handleOpenPDF}>PDF 출력</button>
        </div>
      </div>
    </>
  );
}
export default PaymentCertificatePage;
