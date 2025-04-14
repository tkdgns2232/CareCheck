/**@jsxImportSource @emotion/react */
import * as s from "./style";
import { useEffect, useState } from "react";
import SummaryChart from "../../components/Summury/Chart/SummaryChart";
import SummaryTable from "../../components/Summury/Table/SummaryTable";
import { useGetTotalSummary } from "../../queries/summaryQuery";

function SummaryChartPage() {
  const today = new Date();
  const dateString = today.getFullYear();
  const [year, setYear] = useState(dateString);
  const summaryInfoByYear = useGetTotalSummary(year);
  const [summaryData, setSummaryData] = useState({
    "1분기": 1000000,
    "2분기": 2000000,
    "3분기": 3000000,
    "4분기": 4000000,
  });
  
  useEffect(() => {
    if (summaryInfoByYear?.data?.data) {
      const newSummaryData = {};
      summaryInfoByYear?.data?.data.map((item) => {
        newSummaryData[item.quarterly] = item.totalSummary;
      });
      setSummaryData(newSummaryData);
    }
  }, [year, summaryInfoByYear?.data]);

  const changeYearOnChange = (e) => {
    setYear(e.target.value);
  };

  return (
    <div css={s.layout}>
      <div css={s.header}>
        <h3>병원 수익 분석</h3>
        <input type="number" value={year} onChange={changeYearOnChange} />
      </div>
      <div css={s.container}>
        {summaryInfoByYear.isLoading ? (
          <div>로딩중</div>
        ) : (
          <>
            <div css={s.chart}>
              <SummaryChart summaryData={summaryData} year={year} />;
            </div>
            <div css={s.table}>
              <SummaryTable summaryData={summaryData} />;
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default SummaryChartPage;
