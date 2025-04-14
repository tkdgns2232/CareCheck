import { css } from "@emotion/react";

export const container = css`
  box-sizing: border-box;
  display: flex;
  border: 0.1rem solid #dbdbdb;
  border-radius: 0.4rem;
  width: 100%;
  height: 100%;

  background-color: #ffffff;
`;

export const containerStyle = css`
  display: flex;
  height: 100vh;
`;

export const contentStyle = css`
  margin-left: 31rem; /* 사이드바 너비만큼 확보 */
  flex-grow: 1;
  padding: 2rem;
`;