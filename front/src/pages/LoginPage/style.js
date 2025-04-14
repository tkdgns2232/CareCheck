import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    width: 100%;
`;

export const title = css`
    display: flex;
    justify-content: center;
    margin-top: 0;
    font-size: 7rem;
    font-weight: 600;
    color: #464667;
`;

export const groupBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 0.6rem 0;
    width: 70.9rem;
`;

export const inputContainer = css`
  display: flex;
  align-items: center;
  position: relative;
  width: 55rem;
  padding-bottom: 2rem;
`;

export const inputstyle = css`
  width: 60rem;
  height: 7rem;
  padding: 0 1rem;
  box-sizing: border-box;
  font-size: 2rem;
`;

export const iconStyle = css`
  position: absolute;
  right: 1rem; 
  font-size: 2.5rem;
  color: #aeaeae;

  & > path {
    color: #aeaeae;
  }
`;
export const button = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 55rem;
    height: 8rem;
    padding: 1.5rem;
    margin-top: 5rem;
    border-radius: 0.8rem;
    background-color: #464667;
    color: #ffffff;
    border: none;
    font-size: 3.6rem;
    cursor: pointer;
   
   &:hover {
        background-color: #5F627A;
   }
`;