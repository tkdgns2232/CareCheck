import { css } from "@emotion/react";

export const layout = css`
  display: flex;
  width: 40rem;
`;
export const closeField = css`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
`;
export const list = css`
  justify-content: center;
  width: 40rem;
  overflow-y: auto;
  border: 0.1rem solid #000000;
  border-collapse: collapse;

  & tr {
    height: 5rem;
    box-sizing: border-box;
    cursor: pointer;
    &:hover {
      background-color: #dbdbdb;
    }
  }

  & td {
    height: 5rem;
    box-sizing: border-box;
    border: 0.1rem solid #000000;
    font-size: 2rem;
    color: #000000;
    text-align: center;
  }
  & td:nth-of-type(1) {
    width: 6rem;
  }
  & td:nth-of-type(2) {
    width: 6rem;
  }
  & td:nth-of-type(3) {
    width: 6rem;
  }
  & td:nth-of-type(4) {
    width: 3rem;
  }
`;

export const nodata = css`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 6rem;
  border: 0.1rem solid #000000;
  font-size: 2.5rem;
`;
