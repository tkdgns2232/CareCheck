/** @jsxImportSource @emotion/react */
import { tableContainer, summaryTable } from "./style.js";

function SummaryTable({ summaryData }) {
  return (
    <div css={tableContainer}>
      <h3>분기별 요약</h3>
      <table css={summaryTable}>
        <thead>
          <tr>
            <th>분기</th>
            <th>금액</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1분기</td>
            <td>
              {summaryData["1분기"]
                ? Number(summaryData["1분기"]).toLocaleString("ko-KR")
                : "0"}
            </td>
          </tr>
          <tr>
            <td>2분기</td>
            <td>
              {summaryData["2분기"]
                ? Number(summaryData["2분기"]).toLocaleString("ko-KR")
                : "0"}
            </td>
          </tr>
          <tr>
            <td>3분기</td>
            <td>
              {summaryData["3분기"]
                ? Number(summaryData["3분기"]).toLocaleString("ko-KR")
                : "0"}
            </td>
          </tr>
          <tr>
            <td>4분기</td>
            <td>
              {summaryData["4분기"]
                ? Number(summaryData["4분기"]).toLocaleString("ko-KR")
                : "0"}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SummaryTable;
