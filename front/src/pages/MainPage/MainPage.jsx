/**@jsxImportSource @emotion/react */
import AccountLayout from '../../components/mainPage/AccountLayout/AccountLayout';
import CalendarLayout from '../../components/mainPage/CalendarLayout/CalendarLayout';
import NoticeLayout from '../../components/mainPage/NoticeLayout/NoticeLayout';
import * as s from './style';

function MainPage(props) {
  return (
    <div css={s.layout}>
      <div>
        <div css={s.accountLayout}>
          <AccountLayout />
        </div>
        <div css={s.noticeLayout}>
          <NoticeLayout />
        </div>
      </div>
      <div css={s.calendarLayout}>
        <CalendarLayout />
      </div>
    </div>
  );
}

export default MainPage;