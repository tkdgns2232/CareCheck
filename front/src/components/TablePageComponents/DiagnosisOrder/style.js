import { css } from "@emotion/react";

export const list = css`
  width: 100%;
  border: 0.1rem solid #000000;
  border-collapse: collapse;
  margin: 1rem 0rem 1rem;

  & tbody tr {
    height: 4rem; /* 행 높이 설정 */
    border: 0.1rem solid black;
  }

  & tbody td {
    border: 0.1rem solid #000000; /* 셀 테두리 */
    height: 4rem;
    font-size: 1.8rem; /* 폰트 크기 */
    text-align: center; /* 텍스트 가운데 정렬 */
  }

  & tbody td:nth-of-type(1) {
    width: 20rem; /* 첫 번째 셀 너비 */
  }

  & tbody td:nth-of-type(2) {
    width: 32rem; /* 두 번째 셀 너비 */
  }

  & tbody td:nth-of-type(3),
  & tbody td:nth-of-type(4),
  & tbody td:nth-of-type(5),
  & tbody td:nth-of-type(6),
  & tbody td:nth-of-type(7) {
    width: 5rem; /* 나머지 셀 너비 */
  }
`;
