import { css } from "@emotion/react";

export const container = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1rem 0rem 1rem 2rem;
`;

export const header = css`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  height: 5rem;

  & > h2 {
    width: 40rem;
    margin-left: 12rem;
    font-size: 2.5rem;
    text-align: center;
  }

  & > div {
    font-size: 3rem;
    cursor: pointer;
  }
`;

export const searchField = css`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60rem;
  height: 4rem;
  margin-bottom: 1rem;
  border-bottom: 0.1rem solid #dbdbdb;

  & > span {
    width: 10rem;
    margin-left: 1rem;
    margin-bottom: 0.8rem;
    font-size: 1.9rem;
    font-weight: bold;
  }
  
  & > input {
    width: 40rem;
    border: none;
    font-size: 1.9rem;
  }

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 5rem;
    font-size: 3rem;
    cursor: pointer;
  }
`;

export const mainField = css`
  & > h3 {
    margin-left: 1rem;
    font-size: 2rem;
  }

  & > table {
    width: 60rem;
    border: 0.1rem solid #dbdbdb;
    border-collapse: collapse;
    margin: 1rem 0;
    font-size: 1.6rem;
    color: #333;

    thead {
      background-color: #f5f5f5; /* 테이블 헤더 배경 색상 */
    }

    th,
    td {
      border: 0.1rem solid #dbdbdb;
      width: 50%;
      text-align: left;
      padding: 1rem;
    }

    th {
      text-transform: uppercase; /* 헤더 텍스트를 대문자로 변환 */
      font-weight: bold;
    }

    tr:nth-of-type(odd) {
      background-color: #f9f9f9; /* 짝수 행 배경색 */
    }

    tr:nth-of-type(even) {
      background-color: #ffffff; /* 홀수 행 배경색 */
    }

    tr:hover {
      background-color: #f1f1f1; /* 마우스 오버 시 강조 */
      cursor: pointer;
    }
  }
`;

export const selectField = css`
  & > table {
    width: 60rem;
    border: 0.1rem solid #dbdbdb;
    border-collapse: collapse;
    margin: 1rem 0;
    font-size: 1.6rem;
    color: #333;

    thead {
      background-color: #f5f5f5; /* 테이블 헤더 배경 색상 */
    }

    th,
    td {
      border: 0.1rem solid #dbdbdb;
      width: 50%;
      text-align: left;
      padding: 1rem;
    }

    th {
      text-transform: uppercase; /* 헤더 텍스트를 대문자로 변환 */
      font-weight: bold;
    }

    tr:nth-of-type(odd) {
      background-color: #f9f9f9; /* 짝수 행 배경색 */
    }

    tr:nth-of-type(even) {
      background-color: #ffffff; /* 홀수 행 배경색 */
    }

    tr:hover {
      background-color: #f1f1f1; /* 마우스 오버 시 강조 */
      cursor: pointer;
    }
  }
`;

export const selectFieldHeader = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 5rem;
  
  & > button {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;

    box-sizing: border-box;
    border: 0.1rem solid #9f9f9f;
    border-radius: 0.2rem;

    width: 7rem;
    height: 3rem;
    background-color: #464667;

    & > span {
      font-size: 1.6rem;
      color: #ffffff;
    }

    &:disabled {
      background-color: #9f9f9f;
      color: #d3d3d3;
      cursor: not-allowed;
    }
  }

  & > h3 {
    margin-left: 1rem;
    font-size: 2rem;
  }
`;
