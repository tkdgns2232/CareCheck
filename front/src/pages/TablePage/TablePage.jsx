/**@jsxImportSource @emotion/react */
import * as s from "./style";
import { useEffect } from "react";
import DiagnosisOrder from "../../components/TablePageComponents/DiagnosisOrder/DiagnosisOrder";
import AdmPatientVital from "../../components/TablePageComponents/AdmPatientViatal/AdmPatientVital";
import WaitingList from "../../components/TablePageComponents/WaitingList/WaitingList";
import DiagnosisDesease from "../../components/TablePageComponents/DiagnosisDesease/DiagnosisDesease";
import { useRecoilState } from "recoil";
import {
  diagnosisDisease,
  diagnosisOrders,
  openDiseaseModal,
  openOrdersModal,
  waitingListAdmId,
} from "../../atoms/doctorTable/doctorTableAtom";
import ReactModal from "react-modal";
import DiseasesModal from "../../components/TablePageComponents/Modals/DiseasesModal/DiseasesModal";
import OrderModal from "../../components/TablePageComponents/Modals/OrdersModal/OrderModal";
import {
  useDiagnosisInAdmIdMutation,
  useOrdersInAdmIdMutation,
  useUpdateEndDateMutation,
} from "../../mutations/admissionMutation";
import { useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";

function TablePage() {
  const ordersInAdmIdMutation = useOrdersInAdmIdMutation();
  const diagnosisInAdmIdMutation = useDiagnosisInAdmIdMutation();
  const updateEndDateMutation = useUpdateEndDateMutation();
  const [admissionId, setAdmissionId] = useRecoilState(waitingListAdmId);
  const [diseaseModalOpen, setDiseaseModalOpen] =
    useRecoilState(openDiseaseModal);
  const [ordersModalOpen, setOrdersModalOpen] = useRecoilState(openOrdersModal);
  const [diagnosisList, setDiagnosisList] = useRecoilState(diagnosisDisease);
  const [ordersList, setOrdersList] = useRecoilState(diagnosisOrders);
  const queryClient = useQueryClient();
  const loginUser = queryClient.getQueryData(["userMeQuery"]);
  useEffect(() => {}, [loginUser?.data?.usercode, admissionId]);

  const handleDiseaseModalOpen = () => {
    setDiseaseModalOpen(true);
  };

  const handleOrdersModalOpen = () => {
    setOrdersModalOpen(true);
  };

  const handleRefetchOnClick = () => {
    queryClient.invalidateQueries(["useGetSearchWaitingList"]);
  };

  const handleSaveDiagnosisOnClick = async () => {
    await diagnosisInAdmIdMutation.mutateAsync({
      admissionId,
      diagnosisList,
    });

    await Swal.fire({
      titleText: "진단입력이 완료되었습니다.",
      icon: "success",
      showConfirmButton: false,
      timer: 1000,
      position: "center",
    });
  };

  const handleSaveOrdersOnClick = async () => {
    await ordersInAdmIdMutation.mutateAsync({
      admissionId,
      ordersList,
    });

    await Swal.fire({
      titleText: "처방입력이 완료되었습니다.",
      icon: "success",
      showConfirmButton: false,
      timer: 1000,
      position: "center",
    });
  };

  const handleSaveEndDateOnClick = async () => {
    await updateEndDateMutation.mutateAsync(admissionId);
    await Swal.fire({
      titleText: "해당 환자 진료 종결되었습니다.",
      icon: "success",
      showConfirmButton: false,
      timer: 1000,
      position: "center",
    });

    queryClient.invalidateQueries(["useGetSearchWaitingList"]);
    setAdmissionId("");
  };

  const today = new Date();
  const dateString = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  useEffect(() => {
    queryClient.invalidateQueries(["useGetSearchWaitingList"]);
  }, [admissionId]);
  return (
    <>
      <div css={s.layout}>
        <div css={s.parent}>
          <div>
            <table css={s.leftTable}>
              <tbody>
                <tr onClick={handleRefetchOnClick}>
                  <td>{dateString} 대기자 명단</td>
                </tr>
              </tbody>
            </table>

            <table css={s.waitingList}>
              <tbody>
                <tr>
                  <td>차트번호</td>
                  <td>환자명</td>
                  <td>접수시간</td>
                  <td>시작</td>
                </tr>
              </tbody>
            </table>
            <div css={s.lefttableLayout}>
              <WaitingList usercode={loginUser?.data?.usercode} />
            </div>
          </div>
          {/*진료 대기자 명단 끝*/}
          <div>
            <div>
              <table css={s.rightTable}>
                <tbody>
                  <tr>
                    <td>환자정보</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <table>
                <tbody css={s.patientInfo}>
                  <tr>
                    <td>차트번호</td>
                    <td>환자명</td>
                    <td>키</td>
                    <td>몸무게</td>
                    <td>체온</td>
                  </tr>
                </tbody>
              </table>
              <div css={s.vitalLayout}>
                <AdmPatientVital
                  admissionId={admissionId}
                  usercode={loginUser?.data?.usercode}
                />
              </div>
            </div>
            {/*환자정보 끝*/}
            <div>
              <div>
                <table css={s.rightTable} onClick={handleDiseaseModalOpen}>
                  <tbody>
                    <tr>
                      <td>상병 등록</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div>
                <table>
                  <tbody>
                    <tr css={s.diagnosisRegister}>
                      <td>상병코드</td>
                      <td>병명</td>
                      <td>삭제</td>
                    </tr>
                  </tbody>
                </table>
                <div css={s.tableLayout}>
                  <DiagnosisDesease />{" "}
                </div>
                <div css={s.tableFooter}>
                  <button onClick={handleSaveDiagnosisOnClick}>
                    <span>상병전송</span>
                  </button>
                </div>
              </div>
            </div>
            {/*상병등록 끝*/}
            <div>
              <div>
                <table css={s.rightTable} onClick={handleOrdersModalOpen}>
                  <tbody>
                    <tr>
                      <td>처방 등록</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div>
                <table>
                  <tbody>
                    <tr css={s.prescriptionRegister}>
                      <td>처방코드</td>
                      <td>처방명</td>
                      <td>용량</td>
                      <td>횟수</td>
                      <td>일수</td>
                      <td>용법</td>
                      <td>삭제</td>
                    </tr>
                  </tbody>
                </table>
                <div css={s.tableLayout}>
                  <DiagnosisOrder />
                </div>
                <div css={s.tableFooter}>
                  <button onClick={handleSaveOrdersOnClick}>
                    <span>오더전송</span>
                  </button>
                  <button onClick={handleSaveEndDateOnClick}>
                    <span>진료종결</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ReactModal
          isOpen={diseaseModalOpen}
          onRequestClose={() => setDiseaseModalOpen(false)}
          style={{
            overlay: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#00000099",
            },
            content: {
              boxSizing: "border-box",
              position: "static",
              borderRadius: "1.5rem",
              width: "70rem",
              height: "60rem",
              overflowX: "hidden",
              overflowY: "auto",
            },
          }}
          children={<DiseasesModal admissionId={admissionId} />}
        />{" "}
        <ReactModal
          isOpen={ordersModalOpen}
          onRequestClose={() => setOrdersModalOpen(false)}
          style={{
            overlay: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#00000099",
            },
            content: {
              boxSizing: "border-box",
              position: "static",
              borderRadius: "1.5rem",
              width: "80rem",
              height: "60rem",
              overflowX: "hidden",
              overflowY: "auto",
            },
          }}
          children={<OrderModal admissionId={admissionId} />}
        />
      </div>
    </>
  );
}

export default TablePage;
