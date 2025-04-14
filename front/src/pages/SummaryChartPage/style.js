import { css } from "@emotion/react";

export const header = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > h3 {
    font-size: 4rem;
    text-align: center;
  }

  & > input {
    width: 20rem;
    height: 3rem;
    text-align: center;
    font-size: 2.5rem;
  }
`;

export const container = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const chart = css`
  box-sizing: border-box;
  margin-top: 4.5rem;
  margin-right: 5rem;
  width: 70rem;
  height: 80rem;
`;

export const table = css`
  box-sizing: border-box;
  width: 70rem;
  height: 80rem;
  margin-left: 5rem;
`;