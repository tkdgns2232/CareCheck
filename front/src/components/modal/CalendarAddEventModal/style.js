// style.js
import { css } from "@emotion/react";

export const layout = css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const container = css`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border-radius: 0.8rem;
  width: 50rem;
  height: 40rem;
  background-color: #fafafa;
`;

export const title = css`
  box-sizing: border-box;
  padding: 0.8rem;
  margin-bottom: 0.8rem;
  font-size: 2rem;
  border: none;
  border-bottom: 0.1rem solid #dbdbdb;
   &:focus {
    outline: none;
   }
`;

export const startDate = css`
  display: flex;
  flex-direction: column;

  & > label {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 0.4rem;
  }

  & > input {
    padding: 2rem;
    border: 0.1rem solid #dbdbdb;
    border-radius: 0.5rem;
    font-size: 1.5rem;
  }

  .react-datepicker__calendar-icon {
    display: flex;
    align-items: center;
    margin-left: 0.1rem;
    width: 1rem;
    height: 2rem;
  }

  .react-datepicker {
    width: 23rem;
    height: 22rem;
    border-radius: 1.2rem;
  }

  .react-datepicker__header {
    background-color: #e0f2fe;
    width: 23rem;
    border-top-right-radius: 1.2rem;
    border-top-left-radius: 1.2rem;
    border-bottom: none;
    & > h2 {
      font-size: 1.5rem;
    }
  }

  .react-datepicker__triangle {
    visibility: hidden;
  }

  .react-datepicker__day-names {
    box-sizing: border-box;
    margin-top: 1.2rem;
    margin-bottom: 0.2rem;
    & > div {
      font-size: 1.5rem;
      font-weight: 500;
      margin-right: 0.5rem;
    }
  }

  .react-datepicker__month {
    margin-top: 1.3rem;
  }
  
  .react-datepicker__week {
    & > div {
      font-size: 1.3rem;
      margin-right: 0.5rem;
      margin-bottom: 0.3rem;
    }
  }
`;


export const endDate = css`
  display: flex;
  flex-direction: column;

  & > label {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0.5rem 0
  }

  & > input {
    padding: 2rem;
    border: 0.1rem solid #dbdbdb;
    border-radius: 0.5rem;
    font-size: 1.5rem;
  }

  .react-datepicker__calendar-icon {
    display: flex;
    align-items: center;
    margin-left: 0.1rem;
    width: 1rem;
    height: 2rem;
  }

  .react-datepicker {
    width: 23rem;
    height: 22rem;
    border-radius: 1.2rem;
  }

  .react-datepicker__header {
    background-color: #e0f2fe;
    width: 23rem;
    border-top-right-radius: 1.2rem;
    border-top-left-radius: 1.2rem;
    border-bottom: none;
    & > h2 {
      font-size: 1.5rem;
    }
  }

  .react-datepicker__triangle {
    visibility: hidden;
  }

  .react-datepicker__day-names {
    box-sizing: border-box;
    margin-top: 1.2rem;
    margin-bottom: 0.2rem;
    & > div {
      font-size: 1.5rem;
      font-weight: 500;
      margin-right: 0.5rem;
    }
  }

  .react-datepicker__month {
    margin-top: 1.3rem;
  }
  
  .react-datepicker__week {
    & > div {
      font-size: 1.3rem;
      margin-right: 0.5rem;
      margin-bottom: 0.3rem;
    }
  }
`;

export const content = css`
  display: flex;
  box-sizing: border-box;
  margin-top: 1.2rem;
  width: 50rem;
  height: 50rem;
  border: 0.1rem solid #dbdbdb;
  border-radius: 0.3rem;

  &::placeholder {
    padding: 0.2rem;
    font-size: 1.5rem;
  }

  &:focus {
    outline: none;
   }
`;

export const buttonGroup = css`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  margin-top: 1.2rem;
`;

export const saveButton = css`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  width: 5rem;
  height: 3rem;
  margin-right: 1rem;
  background-color: #464667;
  border-radius: 0.3rem;
  color: #fafafa;
  cursor: pointer;

  &:hover {
    background-color: #5a5a85;
  }

  &:active {
    background-color: #323255;
  }
`;

export const cancelButton = css`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  width: 5rem;
  height: 3rem;
  background-color: #FA4C53;
  border-radius: 0.3rem;
  color: #fafafa;
  cursor: pointer;
  
  &:hover {
    background-color: #EF3239;
  }

  &:active {
    background-color: #C5373E;
  }
`;
