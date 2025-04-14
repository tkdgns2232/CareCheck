/**@jsxImportSource @emotion/react */
import * as s from './style';
import { useState } from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import CalendarAddEventModal from '../../modal/CalendarAddEventModal/CalendarAddEventModal';

function CalendarLayout(props) {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({
    content_title: "",
    description: "",
    start: null,
    end: null,
  });

  const [showAddEventModal, setShowAddEventModal] = useState(false);

  const handleAddEventOnClick = () => {
    const event = {
      title: `${newEvent.content_title} - ${newEvent.description}`,
      start: newEvent.start,
      end: newEvent.end,
    };

    setEvents([...events, event]);

    setNewEvent({ content_title: "", description: "", start: null, end: null });
    setShowAddEventModal(false);
  };

  return (
    <>
      <div css={s.calendarLayout}>
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          locale="ko"
          events={events}
          height="100%"
          dayCellContent={(e) => e.date.getDate()}
          eventContent={(eventInfo) => {
            return <div>{eventInfo.event.title}</div>;
          }}
        />
        <button css={s.addEventButton} onClick={() => setShowAddEventModal(true)}>
          일정 추가하기
        </button>
        {showAddEventModal && (
          <CalendarAddEventModal
            newEvent={newEvent}
            setNewEvent={setNewEvent}
            onClose={() => setShowAddEventModal(false)}
            onSave={handleAddEventOnClick}
          />
        )}
      </div>
    </>
  );
}

export default CalendarLayout;
