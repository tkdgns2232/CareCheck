import { css } from "@emotion/react";

export const global = css`
  @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap");

  html,
  body,
  #root {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    height: 100%;
    overflow: hidden;
    font-family: "Noto Sans KR", serif;
    font-size: 62.5%; /** 1rem을 10px로 변환 */
  }

  #root {
    background-color: #fafafa;
    & > div {
      border: none;
    }
  }

  body {
    font-size: 1rem;
  }
`;