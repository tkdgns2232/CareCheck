/**@jsxImportSource @emotion/react */
import * as s from "./style";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetSearchDetailBill,
  useGetSearchPatientInfo,
  useGetSearchTotalPay,
} from "../../queries/admissionQuery";
import { paymentResponse } from "../../atoms/payments/payment";
import Swal from "sweetalert2";

function DetailBillPage() {
  const navigate = useNavigate();
  const today = new Date();
  const dateString = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const param = useParams();
  const [patientData, setPatientData] = useState({
    admissionId: null,
    patientId: null,
    patientName: null,
    admDate: null,
  });

  const handlePaymentClick = async () => {
    try {
      paymentResponse(patientData, totalPayAdmId?.data?.data);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "에러 발생",
        confirmButtonText: "<div style='font-size: 1.5rem'>확인</div>",
      })
    }
  };

  const patientInfoByAdmId = useGetSearchPatientInfo(Number(param.admissionId));
  const patientInfoApi = patientInfoByAdmId?.data?.data;
  useEffect(() => {
    if (!!patientInfoApi) {
      setPatientData((prev) => ({
        ...prev,
        admissionId: patientInfoApi.admId,
        patientId: patientInfoApi.patientId,
        patientName: patientInfoApi.patientName,
        admDate: patientInfoApi.admDate,
      }));
    }
  }, [param.admissionId, patientInfoApi]);

  const detailBillAdmId = useGetSearchDetailBill(
    Number(patientData.admissionId)
  );
  const detailBillData = detailBillAdmId?.data?.data.diagnosisOrder || [];

  const totalPayAdmId = useGetSearchTotalPay(Number(patientData.admissionId));

  const handlePaymentCertificate = (admId) => {
    navigate(`/admission/${admId}/certificate`);
  };

  return (
    <div css={s.layout}>
      <div css={s.container}>
        <main>
          <h2 css={s.title}>진료비세부내역서</h2>
          <div css={s.patientInfo}>
            <div css={s.patientInfoHead}>
              <div>차트번호</div>
              <div>환자명</div>
              <div>진료일자</div>
            </div>

            {patientInfoByAdmId.isLoading ? (
              <table css={s.patientTable}>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </table>
            ) : (
              <table css={s.patientTable}>
                <tr>
                  <td>{patientData.patientId}</td>
                  <td>{patientData.patientName}</td>
                  <td>{patientData.admDate}</td>
                </tr>
              </table>
            )}
          </div>

          <div css={s.billDetailInfo}>
            <div css={s.billDetailHead}>
              <div>코드</div>
              <div>명칭</div>
              <div>금액</div>
              <div>횟수</div>
              <div>일수</div>
              <div>총액</div>
            </div>

            {detailBillData.length < 1 ? (
              <div css={s.nodata}>입력된 값이 없습니다.</div>
            ) : (
              detailBillData.map((order, index) => (
                <table key={index} css={s.billDetailTable}>
                  <tbody>
                    <tr>
                      <td>{order.orderCode}</td>
                      <td>{order.orderName}</td>
                      <td>{order.orderPay.toLocaleString("ko-KR")}</td>
                      <td>{order.orderCount}</td>
                      <td>{order.orderDays}</td>
                      <td>{order.totalOrderPay.toLocaleString("ko-KR")}</td>
                    </tr>
                  </tbody>
                </table>
              ))
            )}
          </div>
          <div css={s.totalPayInfo}>
            <div css={s.totalPayHead}>
              <div>총액</div>
            </div>
            <table css={s.totalPayTable}>
              <tr>
                <td>{totalPayAdmId?.data?.data.toLocaleString("ko-KR")}</td>
              </tr>
            </table>
          </div>
          <div css={s.script}>
            <span>
              신청인 {patientData.patientName} (환자와의 관계: 본인)의 요청에
              따라
            </span>
            <span>진료비 계산서, 영수증 세부내역서를 발급합니다.</span>
            <span> {dateString} </span>
          </div>
        </main>
      </div>
      <div css={s.button}>
        <button
          onClick={() =>
            handlePaymentCertificate(patientInfoByAdmId?.data?.data.admId)
          }
        >
          영수증
        </button>
        <button onClick={handlePaymentClick}>결제</button>
      </div>
    </div>
  );
}

export default DetailBillPage;
