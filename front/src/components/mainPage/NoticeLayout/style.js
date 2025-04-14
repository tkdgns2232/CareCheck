import { css } from "@emotion/react";

export const layout = css`
  display: flex;
  box-sizing: border-box;
  justify-content: space-around;
  margin-left: 5rem;
  width: 150rem;
  height: 75rem;
`;

export const accountLayout = css`
  display: flex;
  box-sizing: border-box;
  margin-bottom: 3rem;
  width: 70rem;
  height: 35rem;
  background-color: beige;
`;

export const noticeLayout = css`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 70rem;
  height: 38rem;
  background-color: #fcfcfc;
`;

export const miniHeader = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0.4rem 1.5rem;
    border-bottom: 0.1rem solid #464667;
    padding: 0.5rem;
    & > h3 {
      font-size: large;
    }
    & > button {
      border: none;
      background: none;
      padding: 0;
      font-size: 2rem;
      cursor: pointer;
    }

`;

export const miniMain = css`
    padding: 1rem;
    height: 27rem;
`;

export const mininoticeListContainer = css`
    margin: 0.5rem;
    padding: 0;
    list-style-type: none;
    width: 67rem;

    & > li:nth-of-type(1) {
        background-color: #a4a4ca;
        & > div:not(& > div:nth-last-of-type(1)) {
            border-right: 0.1rem solid #ffffff;
        }
    }

    & > li {
        display: flex;
        align-items: center;
        height: 3rem;
        cursor: default;

        &:not(:nth-of-type(1)):hover {
            border-radius: 0.7rem;
            background-color: #eeeeee;
            cursor: default;
        }

        & > div {
            display: flex;
            justify-content: center;
            box-sizing: border-box;
            font-size: 1.5rem;
        }
        & > div:not(& > div:nth-last-of-type(1)) {
            border-right: 0.1rem solid #dbdbdb;
        }
        & > div:nth-of-type(1) {
            padding-left: 0.5rem;
            width: 6rem;
            
        }
        & > div:nth-of-type(2) {
            flex-grow: 1;
            display: block;               
            justify-content: flex-start;    
            align-items: center;       
            text-align: center;
            padding: 0 1rem;             
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            cursor: pointer;
            width: 41rem;     
        }
        
        & > div:nth-of-type(3) {
            width: 20rem;
        }
    }
`;