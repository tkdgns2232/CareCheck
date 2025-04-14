/**@jsxImportSource @emotion/react */
import { useRecoilState } from "recoil";
import * as s from "./style";
import { diagnosisDisease } from "../../../atoms/doctorTable/doctorTableAtom";
import { FaMinus } from "react-icons/fa";

function DiagnosisDesease() {
  const [disease, setDisease] = useRecoilState(diagnosisDisease);
  const handleRemoveDisease = (removeDisease) => {
    setDisease((prevDisease) =>
      prevDisease.filter(
        (disease) => disease.diseaseCode !== removeDisease.diseaseCode
      )
    );
  };
  return (
    <>
      <table css={s.list}>
        <tbody>
          {disease.length == 0 ? (
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          ) : (
            disease.map((disease, index) => (
              <tr key={index}>
                <td>{disease.diseaseCode}</td>
                <td>{disease.diseaseKName}</td>
                <td onClick={() => handleRemoveDisease(disease)}>
                  <FaMinus />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </>
  );
}

export default DiagnosisDesease;
