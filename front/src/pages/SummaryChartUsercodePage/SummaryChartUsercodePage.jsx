/**@jsxImportSource @emotion/react */
import * as s from "./style";
import { useEffect, useState } from "react";
import { useGetTotalSummaryByUsercode } from "../../queries/summaryQuery";
import SummaryTable from "../../components/Summury/Table/SummaryTable";
import SummaryChart from "../../components/Summury/Chart/SummaryChart";
import { useGetUsercodeByRoleId } from "../../queries/userRoleQuery";

function SummaryChartUsercodePage() {
  const today = new Date();
  const dateString = today.getFullYear();
  const [year, setYear] = useState(dateString);
  const usernameByroleId = useGetUsercodeByRoleId(2);

  //2번 = 데이터베이스의 고정값으로 ROLE_DOCTOR 시행.
  const [selectUser, setSelectUser] = useState({
    usercode: "",
    username: "",
  });

  const [userList, setUserList] = useState([]);
  const summaryInfoByUsercode = useGetTotalSummaryByUsercode(
    selectUser.usercode,
    year
  );

  const [summaryData, setSummaryData] = useState({
    "1분기": 0,
    "2분기": 0,
    "3분기": 0,
    "4분기": 0,
  });

  useEffect(() => {
    if (usernameByroleId?.data?.data) {
      setUserList(usernameByroleId?.data?.data);
    }
  }, [usernameByroleId?.data]);

  useEffect(() => {
    if (summaryInfoByUsercode?.data?.data) {
      const newSummaryData = {};
      summaryInfoByUsercode?.data?.data.map((item) => {
        newSummaryData[item.quarterly] = item.totalSummary;
      });
      setSummaryData(newSummaryData);
    }
  }, [year, summaryInfoByUsercode?.data, selectUser]);

  const changeUsercodeOnChange = (e) => {
    const selectUsername = userList.find(
      (user) => user.usercode === e.target.value
    );
    if (selectUsername) {
      const newSelectData = {
        usercode: e.target.value,
        username: selectUsername.username,
      };
      setSelectUser(newSelectData);
    }
  };

  const changeYearOnChange = (e) => {
    setYear(e.target.value);
  };
  
  return (
    <div css={s.layout}>
      <div css={s.header}>
        <h3>의사별 {year} 총 수익 데이터</h3>
        <div css={s.select}>
          <select value={selectUser} onChange={changeUsercodeOnChange}>
            <option value="">조회 의사 : </option>
            {userList.map((user) => (
              <option key={user.userRoleId} value={user.usercode}>
                {user.username} 
              </option>
            ))}
          </select>
          <p>{selectUser.username} 조회 결과</p>
        </div>
        <input type="number" value={year} onChange={changeYearOnChange} />
      </div>
      <div css={s.container}>
        {summaryInfoByUsercode.isLoading ? (
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

export default SummaryChartUsercodePage;
