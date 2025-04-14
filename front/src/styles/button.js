import { css } from "@emotion/react";

export const buttontest = css`
  display: flex;
  justify-content: center;
  align-items: center;

  box-sizing: border-box;
  border: 0.1rem solid #9f9f9f;
  border-radius: 0.5rem;

  width: 50rem;
  height: 5rem;
  background-color: #464667;

  & > span {
    font-size: 3rem;
    font-weight: bold;
    color: #ffffff;
  }
`;
