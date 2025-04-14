import { css } from "@emotion/react";

export const list = css`
  justify-content: center;
  border: 0.1rem solid #000000;
  border-collapse: collapse;
  margin: 1rem 0rem 1rem;

  & > tbody > tr,
  td {
    width: 20rem;
    height: 4rem;
    border: 0.1rem solid #000000;
    box-sizing: border-box;
    font-size: 2rem;
    color: #000000;

    & > td:nth-of-type(1) {
      width: 20.5rem;
    }
    & > td:nth-of-type(2) {
      width: 60rem;
    }
    & > td:nth-of-type(3) {
      width: 5.8rem;
    }
  }
`;
