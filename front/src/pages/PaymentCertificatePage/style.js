import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    box-sizing: border-box;
    justify-content: center;
    margin-top: 5rem;
    overflow: hidden;
    height: 90%;
    background-color: #ffffff;
`;

export const table = css`
    width: 63.6rem;
    height: 70rem;
    table-layout: fixed; /* 고정 */
    border-collapse: collapse; /* 테두리 중복 제거 */
    text-align: center;
    font-size: 3rem;
    border: 2px solid #000; /* 테이블 외부 테두리 */

    td {
        border: 1px solid #000; /* 셀 테두리 */
        padding: 1rem;
    }
`;

export const headerTitle = css`
    text-align: center;
    width: 20rem;
    height: 15rem;
    font-size: 3rem;
    word-spacing: 8rem;
`;

export const title = css`
    text-align: center;
    width: 16rem;
    height: 7rem;
    font-size: 3rem;
    word-spacing: 0.8rem; /* 어간 (단어 사이의 간격) 조절 */
`;

export const title2 = css`
    text-align: center;
    width: 16rem;
    height: 7rem;
    font-size: 3rem;
    word-spacing: 5rem;
`;

export const money = css`
    font-size: 3rem;
    word-spacing: 10rem;

    span:nth-of-type(2) {
    }
`;

export const note = css`
    font-size: 2rem;
    word-spacing: 0.5rem;
`;

export const checkSpace = css`
    font-size: 2rem;
    margin-bottom: 2rem;
    word-spacing: 5rem;
`;

export const left = css`
    div {
        text-align: left;
        margin-left: 11rem;
    }
`;

// export const buttonContainer = css`
//     display: flex;
//     align-self: flex-start;
//     justify-content: flex-end;
// `;

export const button = css`
  display: flex;
  justify-content: flex-end;
  align-self: flex-end;
  margin: 0rem 0rem 11rem 5rem;
  gap: 1rem;

  & > button {
    width: 10rem;
    height: 5rem;
    background-color: #464667;
    outline: none;
    border-radius: 1rem;
    color: #ffffff;
    font-size: 1.5rem;
    cursor: pointer;
  }
`;