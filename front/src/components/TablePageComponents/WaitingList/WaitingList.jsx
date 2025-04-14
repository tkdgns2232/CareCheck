/**@jsxImportSource @emotion/react */
import { useRecoilState } from "recoil";
import { useGetSearchWaitingList } from "../../../queries/admissionQuery";
import * as s from "./style";
import React, { useEffect } from "react";
import {
  diagnosisDisease,
  diagnosisOrders,
  waitingListAdmId,
} from "../../../atoms/doctorTable/doctorTableAtom";
import { FaRegCalendarCheck } from "react-icons/fa";
import { useUpdateStartDateMutation } from "../../../mutations/admissionMutation";

function WaitingList({ usercode }) {
  const updateStartDateMutation = useUpdateStartDateMutation();
  const [admissionId, setAdmissionId] = useRecoilState(waitingListAdmId);
  const [diagnosisDiseaseState, setResetDisease] =
    useRecoilState(diagnosisDisease);
  const [diagnosisOrdersState, setDiagnosisOrders] =
    useRecoilState(diagnosisOrders);
  const waitingListByusercode = useGetSearchWaitingList(usercode);
  const waitingList = waitingListByusercode?.data?.data || [];
  useEffect(() => {
    setResetDisease([]);
    setDiagnosisOrders([]);
  }, [admissionId]);

  const handleChangeAdmissionIdOnClick = (admId) => {
    setAdmissionId(admId);
  };
  const handleUpdateStartDateOnClick = async (admissionId) => {
    await updateStartDateMutation.mutateAsync(admissionId);
  };
  return (
    <div css={s.layout}>
      {waitingList.length > 0 ? (
        <>
          <table css={s.list}>
            {waitingList.map((waiting) => (
              <tbody>
                <tr
                  key={waiting.admId}
                  onClick={() => handleChangeAdmissionIdOnClick(waiting.admId)}
                >
                  <td>{waiting.patientId}</td>
                  <td>{waiting.patientName}</td>
                  <td>{waiting.admDate}</td>
                  <td>
                    <div
                      css={s.closeField}
                      onClick={() =>
                        handleUpdateStartDateOnClick(waiting.admId)
                      }
                    >
                      <FaRegCalendarCheck />
                    </div>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </>
      ) : (
        <div css={s.nodata}>대기자가 없습니다</div>
      )}
    </div>
  );
}
export default WaitingList;
