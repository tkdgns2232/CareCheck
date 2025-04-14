import { css } from "@emotion/react";

export const sidebar = css`
  position: fixed;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 31rem;
  height: 95.4rem;
  background-color: #464667;
  border-top-right-radius: 2.8rem;
  border-bottom-right-radius: 2.8rem;
  color: #ffffff;
  font-weight: bold;
`;

export const header = css`
  margin-top: 5rem;
  font-size: 2.6rem;
  font-weight: bold;

  & > h2 {
    color: #ffffff;
  }

  & > a {
    text-decoration: none;
    color:white;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    line-height: 2rem;
    white-space: nowrap;
  }

  
`;

export const section = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 60rem;

  & > div {
    display: flex;
    align-items: center;
    width: 25rem;
    height: 3rem;
    margin-left: 4rem;
    margin-bottom: 4rem;
    color: #ffffff;
    background-color: #464667;
    font-size: 2.5rem;

    .NavLinkStyle {
    text-decoration: none; 
    color: inherit;
    background-color: #e29d9d00; 
    border: none;
    margin-left: 1rem; 
    
    & > span {
      cursor: pointer;

      &:hover{
        color: #000000 ;
        font-weight: bold;
        font-size: 2.5rem;
        white-space: nowrap;
      }
    }
   }
  }


`;

export const footer = css`
  display: flex;
  margin-bottom: 5rem;
  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1.5rem;
    width: 17.7rem;
    height: 5rem;
    background-color: #ffffff;
    font-size: 2rem;
    color: #273a34;
    cursor: pointer;
  }
`;

