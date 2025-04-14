/**@jsxImportSource @emotion/react */
import DatePicker from 'react-datepicker';
import * as s from './style';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from "date-fns/locale"


function CalendarAddEventModal({ newEvent, setNewEvent, onClose, onSave }) {

  const handleStartDateChange = (date) => {
    setNewEvent({ ...newEvent, start: date });
  };

  const handleEndDateChange = (date) => {
    setNewEvent({ ...newEvent, end: date });
  };

  return (
    <div css={s.layout}>
      <div css={s.container}>
        <input
          css={s.title}
          type="text"
          placeholder="일정 제목"
          value={newEvent.content_title}
          onChange={(e) => setNewEvent({ ...newEvent, content_title: e.target.value })}
        />
        <div>
          <div css={s.startDate}>
            <label>시작 날짜</label>
            <DatePicker
              showIcon
              selected={newEvent.start}
              onChange={handleStartDateChange}
              locale={ko}
              dateFormatCalendar="yyyy년 MM월"
              dateFormat="yyyy-MM-dd"
              placeholderText="yyyy-MM-dd"
            />
          </div>

          <div css={s.endDate}>
            <label>종료 날짜</label>
            <DatePicker
              showIcon
              selected={newEvent.end}
              onChange={handleEndDateChange}
              locale={ko}
              dateFormatCalendar="yyyy년 MM월"
              dateFormat="yyyy-MM-dd"
              placeholderText="yyyy-MM-dd"

            />
          </div>

        </div>

        <input
          css={s.content}
          type="text"
          placeholder="내용을 입력해주세요"
          value={newEvent.description}
          onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
        />
        <div css={s.buttonGroup}>
          <button css={s.saveButton} onClick={onSave}>저장</button>
          <button css={s.cancelButton} onClick={onClose}>취소</button>
        </div>
      </div>
    </div>
  );
}

export default CalendarAddEventModal;
