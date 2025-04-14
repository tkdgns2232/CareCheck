/**@jsxImportSource @emotion/react */
import * as s from "./style";
import { useEffect, useState } from "react";
import { useGetSelectVital } from "../../../queries/admissionQuery";
import { useInsertVitallMutation } from "../../../mutations/admissionMutation";
import Swal from "sweetalert2";

function AdmPatientVital({ admissionId, usercode }) {
  const admPatientVitalByAdmId = useGetSelectVital(Number(admissionId));
  const admPatientVitalApi = admPatientVitalByAdmId?.data?.data[0].vital;
  const admPatientVitalAdmId = useGetSelectVital(Number(admissionId));
  const admPatientVitalData = admPatientVitalAdmId?.data?.data[0] || [];
  const vitalMutation = useInsertVitallMutation();
  const [patientVitalData, setPatientVitalData] = useState({
    admissionId,
    patientId: null,
    patientName: null,
  });

  const [inputVitalInfo, setInputVitalInfo] = useState({
    admissionId,
    usercode,
    height: "",
    weight: "",
    fever: "",
  });
  useEffect(() => {
    if (admPatientVitalApi) {
      setPatientVitalData((prev) => ({
        ...prev,
        patientId: admPatientVitalApi.patientId,
        patientName: admPatientVitalApi.patientName,
      }));

      setInputVitalInfo((prev) => ({
        ...prev,
        admissionId,
        usercode,
        height: admPatientVitalApi.height || "",
        weight: admPatientVitalApi.weight || "",
        fever: admPatientVitalApi.fever || "",
      }));
    }
  }, [admissionId, admPatientVitalApi]);

  const handleSaveVitalOnClick = async () => {
    await vitalMutation.mutateAsync(inputVitalInfo);
    await Swal.fire({
      titleText: "바이탈 입력이 완료되었습니다.",
      icon: "success",
      showConfirmButton: false,
      timer: 1000,
      position: "center",
    });
  };

  const handleInputOnChange = (e) => {
    const { name, value } = e.target;
    setInputVitalInfo((prevState) => ({
      ...prevState,
      [name]: parseFloat(value),
    }));
  };
  return (
    <>
      {admPatientVitalData.length < 1 ? (
        <table css={s.list}>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      ) : (
        admPatientVitalApi.map((patientVital) => (
          <table css={s.list} key={patientVitalData}>
            <tbody>
              <tr>
                <td>{admPatientVitalData.patientId}</td>
                <td>{admPatientVitalData.patientName}</td>
                <td>
                  <input
                    type="number"
                    name="height"
                    value={inputVitalInfo.height}
                    onChange={handleInputOnChange}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="weight"
                    value={inputVitalInfo.weight}
                    onChange={handleInputOnChange}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="fever"
                    value={inputVitalInfo.fever}
                    onChange={handleInputOnChange}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        ))
      )}
      <div css={s.tableFooter}>
        <button onClick={handleSaveVitalOnClick}>
          <span>바이탈 전송</span>
        </button>
      </div>
    </>
  );
}

export default AdmPatientVital;
