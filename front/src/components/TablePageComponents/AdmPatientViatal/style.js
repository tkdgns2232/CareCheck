import { css } from "@emotion/react";

export const list = css`
  justify-content: center;
  width: 100%;
  border: 0.1rem solid #000000;
  border-collapse: collapse;
  margin: 1rem 0rem 1rem;

  & > tr,
  td {
    width: 10rem;
    height: 4rem;
    box-sizing: border-box;
    border: 0.1rem solid #000000;
    font-size: 2rem;
    & > input {
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      border: none;
      font-size: 2rem;
      text-align: center;
    }
  }
`;

export const nodata = css`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: 1rem 0rem;
  border: 0.1rem solid #000000;
  width: 80rem;
  height: 4rem;
  font-size: 2rem;
`;

export const tableFooter = css`
  display: flex;
  align-items: center;
  justify-content: end;
  margin-bottom: 0.5rem;

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
