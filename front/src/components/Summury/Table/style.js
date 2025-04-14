import { css } from "@emotion/react";

export const tableContainer = css`
  margin: 2rem auto;
  width: 100%;

  & > h3 {
    text-align: center;
    font-size: 3rem;
  }
`;

export const summaryTable = css`
  width: 100%;
  border: 0.1rem solid #dbdbdb;
  border-collapse: collapse;
  margin-top: 1rem;
  font-size: 1.6rem;
  color: #333;

  thead {
    background-color: #f5f5f5;
  }

  th,
  td {
    width: 50%;
    border: 0.1rem solid #dbdbdb;
    text-align: center;
    padding: 1rem;
  }

  th {
    text-transform: uppercase;
    font-weight: bold;
  }

  tbody tr:nth-of-type(odd) {
    background-color: #f9f9f9;
  }

  tbody tr:nth-of-type(even) {
    background-color: #ffffff;
  }

  tbody tr:hover {
    background-color: #f1f1f1;
    cursor: pointer;
  }
`;

export const tableHeader = css`
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: left;
  font-weight: bold;
  color: #444;
`;

export const tableTitle = css`
  margin-left: 1rem;
  font-size: 2rem;
  color: #222;
`;
