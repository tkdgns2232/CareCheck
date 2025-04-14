import { css } from "@emotion/react";

export const searchItems = css`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin: 4rem 16.5rem 0rem;

    & > div:nth-of-type(1){
        & > h1 {
            margin: 0;
            font-size: 3rem;
        }
    }

    & > div:nth-of-type(2) {
        display: flex;
        align-items: flex-end;
        height: 5rem;
    }
`;

export const searchInput = css`
    justify-self: flex-end;
    padding-left: 0.5rem;
    height: 2.6rem;
`;

export const searchButton = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 0.3rem;
    background-color: #464667;
    border: 0.1rem solid #2c2c43;
    border-radius: 0.3rem;
    padding: 0.5rem;

    & > svg {
        color: #ffffff;
        width: 2rem;
        height: 2rem;
        margin: 0;
        padding: 0;
        cursor: pointer;
    }
`;

export const container = css`
    height: 60rem;
`;

export const tableContainer = css`
    display: flex;
    justify-content: center;
`;

export const table = css`
    width: 128rem;
    text-align: center;
    margin-top: 1rem;
    font-size: 1.5rem;
    border-collapse: collapse;
    border: 0.2rem solid #000000;
    box-sizing: border-box; /* 테이블 외부 테두리 */

    td {
        box-sizing: border-box;
        border: 0.1rem solid #000000;

        &:nth-of-type(1) {
            width: 14rem;
        }

        &:nth-of-type(2) {
            width: 20rem;
        }
        &:nth-of-type(6) {
            width: 15rem;
        }
        &:nth-of-type(7),
        &:nth-of-type(8) {
            padding: 0.5rem 0;
            width: 15rem;
        }
    }
`;

export const trHeader = css`
    background-color: #464667;
    height: 5rem; /* 차트번호 행 높이 설정 */
    color: white;
`;

export const receiptButtons = css`
    box-sizing: border-box;
    width: 8rem;
    height: 4rem;
    padding: 0.5rem 1rem;
    font-size: 1.3rem;
    color: white;
    background-color: #464667;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;

    &:hover {
        background-color: #3d3d5a;
    }

    &:active {
        background-color: #313148;
    }
`;

export const footer = css`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 1rem;
`;

export const pageNumbers = css`
    display: flex;
    width: 25rem;
    
    & > button {
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        margin-right: 0.5rem;
        border: 0.1rem solid #dbdbdb;
        border-radius: 0.5rem;
        width: 2.5rem;
        height: 2.5rem;
        font-weight: 600;
        font-size: 1.2rem;
        cursor: pointer;
        background-color: #ffffff;

        &:hover {
            background-color: #d2d2d3;
        }
        
        &:active {
            background-color: #a4a4ca;
        }

        &:disabled {
            background-color: #dbdbdb;
            cursor: default;
        }

        & > span {
            margin-bottom: 0.1rem;
        }
    }
`;

export const pageNum = (isSelect) => css`
    background-color: ${isSelect ? "#a4a4ca" : "#ffffff"} !important;
`;