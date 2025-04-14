import { css } from "@emotion/react";

export const layout = css`
  display: flex;
  width: 100%;
  max-width: 150rem;
  height: 70rem;
  align-items: center;
  flex-direction: column;
`;

export const header = css`
  & > h2 {
    font-size: 3.5rem;
    font-weight: bold;
    text-align: center;
  }

  & > div {
    display: flex;
    align-items: center;
    & > input {
      width: 20rem;
      height: 3rem;
      border: 0.1rem solid #dbdbdb;
      font-size: 1.9rem;
      text-align: center;
      margin-left: 1.5rem;
      
      &:disabled {
        background-color: #dbdbdb;
      }
    }
  }

`;

export const main = css`
  display: flex;
  justify-content: center;
  width: 110rem;
  max-height: 50rem;
  margin-top: 2rem;
  padding: 1rem;
  overflow-y: auto;
  border: 0.1rem solid #dbdbdb;
  box-sizing: border-box;
`;

export const bodytable = css`
  box-sizing: border-box;
  border: 0.1rem solid #dbdbdb;
  border-collapse: collapse;
  font-size: 1.6rem;
  color: #000000;

  thead {
    background-color: #f5f5f5;
    position: sticky;
    top: 0;
    z-index: 1;
  }

  tr,
  td {
    border: 0.1rem solid #dbdbdb;
    text-align: center;
    padding: 1rem;
    height: 4rem;
  }

  tr:nth-of-type(odd) {
    background-color: #f9f9f9;
  }

  tr:nth-of-type(even) {
    background-color: #ffffff;
  }

  tr:hover {
    background-color: #f1f1f1;
    cursor: pointer;
  }

  td:nth-of-type(2) {
    width: 12rem;
  }

  td:nth-of-type(3) {
    width: 17rem;
  }

  td:nth-of-type(4) {
    width: 15rem;
  }

  td:nth-of-type(5) {
    width: 13rem;
  }

  td:nth-of-type(6) {
    width: 10rem;
  }
  
  td:nth-of-type(7),
  td:nth-of-type(8) {
    width: 8rem;
  }
`;
