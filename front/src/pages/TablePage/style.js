import { css } from "@emotion/react";

export const layout = css`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  flex-direction: column;
  margin-left: 12rem;
  overflow: hidden;
  width: 130rem;
  height: 75rem;
  background-color: #ffffff;
`;

export const parent = css`
  display: flex;
  height: 100%;
  margin-top: 2rem;
  gap: 10rem;

  & > div:nth-of-type(1) {
    flex: 1;
    width: 50rem;
    text-align: center;
  }

  & > div:nth-of-type(2) {
    flex: 2;
    width: 70rem;
    text-align: center;
  }
`;

export const leftTable = css`
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;
  border: 0.1rem solid #000000;
  height: 5rem;
  background-color: #464667;

  & tbody > tr,
  td {
    font-size: 2.2rem;
    font-weight: bold;
    color: #ffffff;
  }

`;

export const waitingList = css`
  width: 100%;
  border: 0.1rem solid #000000;
  border-collapse: collapse;
  margin-bottom: 1rem;

  & tbody tr {
    background-color: #464667;
    height: 1.5rem;
  }

  & tbody td {
    border: 0.2rem solid #dbdbdb;
    font-size: 1.8rem;
    color: #ffffff;
    text-align: center;
  }

  & tbody td:nth-of-type(1) {
    width: 6rem;
  }

  & tbody td:nth-of-type(2) {
    width: 6rem;
  }

  & tbody td:nth-of-type(3) {
    width: 6rem;
  }

  & tbody td:nth-of-type(4) {
    width: 3rem;
  }
`;

export const rightTable = css`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.1rem solid #000000;
  height: 4rem;
  margin-bottom: 0.5rem;
  overflow-y: auto;
  background-color: #464667;

  & > tbody > tr {
    font-size: 2rem;
    font-weight: bold;
    color: #ffffff;
    cursor: pointer;
  }
`;

export const cord = css`
  width: 1rem;
`;

export const patientInfo = css`
  /*환자 정보*/
  box-sizing: border-box;
  justify-content: center;
  width: 100%;
  border: 0.1rem solid black;
  border-collapse: collapse;
  
  & > tr,
  td {
    width: 40rem;
    height: 4rem;
    border: 0.1rem solid black;
    font-size: 1.8rem;
    color: #ffffff;
    background-color: #464667;
  }
`;

export const lefttableLayout = css`
  height: 60rem;
  overflow-y: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const vitalLayout = css`
  height: 10rem;
`;

export const tableLayout = css`
  height: 10rem;
  overflow-y: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const diagnosisRegister = css`
  /*상병 등록*/
  justify-content: center;
  border: 0.1rem solid black;
  border-collapse: collapse;
  margin-bottom: 2rem;

  & > tr,
  td {
    width: 100%;
    height: 3rem;
    border: 0.1rem solid black;
    font-size: 1.8rem;
    color: #ffffff;
    background-color: #464667;
  }

  & > td:nth-of-type(1) {
    width: 20rem;
  }

  & > td:nth-of-type(2) {
    width: 60rem;
  }

  & > td:nth-of-type(3) {
    width: 5rem;
  }
`;

export const prescriptionRegister = css`
  /*처방 등록*/
  justify-content: center;
  width: 100%;
  border: 0.1rem solid black;
  border-collapse: collapse;
  margin-bottom: 1rem;
  
  & > tr,
  td {
    height: 3rem;
    border: 0.1rem solid black;
    font-size: 1.8rem;
    color: #ffffff;
    background-color: #464667;
  }

  & > td:nth-of-type(1) {
    width: 21.3rem;
  }

  & > td:nth-of-type(2) {
    width: 34.5rem;
  }

  & > td:nth-of-type(3) {
    width: 5rem;
  }

  & > td:nth-of-type(4) {
    width: 5rem;
  }

  & > td:nth-of-type(5) {
    width: 5rem;
  }

  & > td:nth-of-type(6) {
    width: 5rem;
  }

  & > td:nth-of-type(7) {
    width: 5rem;
  }
`;

export const tableFooter = css`
  display: flex;
  align-items: center;
  justify-content: end;
  margin-bottom: 1rem;

  & > button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 1rem;
    box-sizing: border-box;
    border: 0.1rem solid #9f9f9f;
    border-radius: 1rem;
    cursor: pointer;

    width: 10rem;
    height: 4rem;
    background-color: #464667;

    &:hover {
      background-color: #464457;
    }

    & > span {
      font-size: 1.5rem;
      font-weight: bold;
      color: #ffffff;
    }
  }
`;