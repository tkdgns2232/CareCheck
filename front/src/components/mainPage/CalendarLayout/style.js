import { css } from "@emotion/react";

export const layout = css`
  display: flex;
  box-sizing: border-box;
  justify-content: space-around;
  margin-left: 5rem;
  width: 150rem;
  height: 75rem;
`;

export const accountLayout = css`
  display: flex;
  box-sizing: border-box;
  margin-bottom: 3rem;
  width: 70rem;
  height: 35rem;
  background-color: beige;
`;

export const noticeLayout = css`
  display: flex;
  box-sizing: border-box;
  width: 70rem;
  height: 38rem;
  background-color: coral;
`;

export const calendarLayout = css`
  width: 70rem;
  height: 72rem;
  .fc-toolbar-title {
    font-size: 1.5rem;
  }
  
  .fc-button-primary {
    font-size: 1.2rem;
  }

  .fc-col-header-cell {
    font-size: 1.5rem;
  }

  .fc-daygrid-day-number {
    font-size: 1.5rem;
  }

  .fc-event-title {
    font-size: 1.5rem;
  }

  .fc-event-main {
    font-size: 1.5rem;
  }
`;

export const addEventButton = css`
  display: flex;
  box-sizing: border-box;
  justify-content: flex-end;
  align-items: center;
  margin-top: 1rem;
  margin-left: auto;
  width: 10rem;
  height: 3rem;
  border-radius: 0.5rem;
  background-color: #464667;
  color: #fafafa;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: #5a5a85;
  }

  &:active {
    background-color: #323255;
  }

`;