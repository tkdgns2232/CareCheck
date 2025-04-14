import { css } from "@emotion/react";

export const layout = css`
  box-sizing: border-box;
  margin-top: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
`;

export const container = css`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3rem;
  width: 98rem;
  height: 100%;
  border: 0.1rem solid #000000;
`;

export const title = css`
  text-align: center;
  font-size: 4rem;
  font-weight: 400;
`;

export const patientInfo = css`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 7rem;
`;

export const patientInfoHead = css`
  display: flex;
  gap: 0.1rem;
  & > div {
    width: 16.6rem;
    height: 2rem;
    background-color: #464667;
    color: #ffffff;
    text-align: center;
    font-size: 1.3rem;
  }
`;

export const patientTable = css`
  box-sizing: border-box;
  width: 50rem;
  height: 3rem;
  margin-top: 0.8rem;
  border: 0.1rem solid #000000;
  border-collapse: collapse;
  table-layout: fixed;

  & td {
    border: 0.1rem solid #000000;
    padding: 0.5rem;
    text-align: center;
    font-size: 1.2rem;
  }

  & input[type="date"] {
    border: none;
    width: 95%;
    margin-left: 0.7rem;
    font-size: 1.2rem;
    font-family: "Noto Sans KR", serif;
    color: #333333;
    text-align: center;
    box-sizing: border-box;
    background-color: transparent;
  }
`;

export const billDetailInfo = css`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin-top: 2.5rem;
  margin-bottom: 0.5rem;
  width: 100%;
  height: auto;
`;

export const billDetailHead = css`
  box-sizing: border-box;
  display: flex;
  margin-bottom: 0.8rem;
  gap: 0.1rem;

  & > div {
    height: 2rem;
    background-color: #464667;
    color: #ffffff;
    text-align: center;
    font-size: 1.3rem;
  }

  & > div:nth-of-type(1) {
    width: 23rem;
  }

  & > div:nth-of-type(2) {
    width: 15.9rem;
  }

  & > div:nth-of-type(3) {
    width: 9.9rem;
  }

  & > div:nth-of-type(4) {
    width: 9.9rem;
  }

  & > div:nth-of-type(5) {
    width: 9.9rem;
  }

  & > div:nth-of-type(6) {
    width: 23rem;
  }
`;

export const billDetailTable = css`
  box-sizing: border-box;
  width: 50rem;
  height: 3rem;
  border: 0.1rem solid #000000;
  border-collapse: collapse;
  table-layout: fixed;
  
  & td,
  & th {
    box-sizing: border-box;
    border: 0.1rem solid #000000;
    padding: 0.5rem;
    text-align: center;
    font-size: 1.2rem;
  }

  & th:nth-of-type(1),
  & td:nth-of-type(1) {
    width: 23rem;
  }

  & th:nth-of-type(2),
  & td:nth-of-type(2) {
    width: 16rem;
  }

  & th:nth-of-type(3),
  & td:nth-of-type(3) {
    width: 10rem;
  }

  & th:nth-of-type(4),
  & td:nth-of-type(4) {
    width: 10rem;
  }

  & th:nth-of-type(5),
  & td:nth-of-type(5) {
    width: 10rem;
  }

  & th:nth-of-type(6),
  & td:nth-of-type(6) {
    width: 23rem;
  }
`;

export const nodata = css`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  border: 0.1rem solid #000000;
  font-size: 2rem;
  width: 100%;
  height: 4rem;
`;

export const script = css`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 3rem;

  & > span {
    height: 5rem;
    font-size: 2rem;
    font-weight: 400;
  }
`;

export const totalPayInfo = css`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: end;
  width: 100%;
  height: 10rem;
`;

export const totalPayHead = css`
  display: flex;
  box-sizing: border-box;
  margin-top: 2.5rem;

  & > div {
    width: 16.6rem;
    height: 2rem;
    background-color: #464667;
    color: #ffffff;
    text-align: center;
    font-size: 1.3rem;
  }
`;

export const totalPayTable = css`
  box-sizing: border-box;
  width: 16.6rem;
  height: 3rem;
  margin-top: 0.8rem;
  border: 0.1rem solid #000000;
  border-collapse: collapse;
  table-layout: fixed;
  
  & td {
    border: 0.1rem solid #000000;
    padding: 0.5rem;
    text-align: center;
    font-size: 1.2rem;
  }
`;

export const button = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-self: flex-end;
  margin: 0rem 0rem 0.5rem 5rem;
  gap: 1rem;

  & > button {
    width: 10rem;
    height: 5rem;
    background-color: #464667;
    outline: none;
    border: none;
    border-radius: 1rem;
    color: #ffffff;
    font-size: 1.5rem;
    cursor: pointer;

    &:hover {
      background-color: #373750;
    }

    &:active {
      background-color: #2a2a3d;
    }
  }
`;
