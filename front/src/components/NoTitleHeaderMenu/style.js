import { css } from "@emotion/react";
export const header = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  margin: 3rem 5rem;
  width: 150rem;
  height: 6rem;
  position: relative;
`;

export const headerMenu = css`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 9rem;
  height: 3rem;
  font-size: 2rem;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:disabled {
    pointer-events: none;
  }

  & > a {
    text-decoration: none;
    color:black;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    line-height: 2rem;
    white-space: nowrap;
  }

  & > svg {
    width: 3.5rem;
    height: 3rem;  

    & > path {
      color: #404040;
    }
  }
  
  .active {
    color: #464667;
    font-weight: bold;
    border-bottom: 3px solid #464667;  
    padding-bottom: 0.5rem;
    width: 100%;

  }

  & > a:visited {
    color: black; 
  }

`;

export const logoutBtn = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20rem;
  height: 5.5rem;
  border-radius: 1.8rem;
  border: none;
  background-color: #464667;
  font-size: 2rem;
  color: #fafafa;
  cursor: pointer;

  & > svg {
    width: 2rem;
    height: 2rem;
    margin-right: 1.5rem;

    & > path {
      color: #fafafa;
    }
  }
`;

export const iconStyle = css`
  margin-right: 0.7rem;
`;

export const titleStyle = css`
  display: inline-block;
`;