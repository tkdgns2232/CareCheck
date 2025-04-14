import { css } from "@emotion/react";

export const container = css`
    display: flex;
    flex-direction: column;
`;

export const header = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 0.1rem solid #464667;
    padding: 1rem;

    & > h2 {
        margin: 0.5rem 0;
        font-size: 2.5rem;
        font-weight: 400;
        color: #2c2c43;

        & > span {
            margin-left: 1rem;
            font-size: 1.2rem;
        }
    }
`;

export const title = css`
    display: flex;
`;

export const searchItems = css`
    display: flex;
    padding-right: 3rem;

    & > Select {
        font-size: 1.5rem;
    }
`;

export const searchInput = css`
    margin-left: 0.3rem;
    padding-left: 0.5rem;
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

export const main = css`
    padding: 1rem;
    height: 55rem;
`;

export const noticeList = css`
    margin: 0;
    padding: 0;
    list-style-type: none;
    width: 155rem;

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
            width: 20rem;
        }

        & > div:nth-of-type(2) {
            display: block;               
            justify-content: flex-start;    
            align-items: center;       
            text-align: center;
            padding: 0 1rem;             
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            cursor: pointer;
            width: 88rem;     
        }

        & > div:nth-of-type(3) {
            width: 18rem;
        }

        & > div:nth-of-type(4) {
            width: 24rem;
        }
        
        & > div:nth-of-type(5) {
            display: flex;
            align-items: center;
            width: 10rem;

            & > button {
                display: flex;
                justify-content: center;
                align-items: center;
                border: none;
                border-radius: 0.5rem;
                margin-top: 0.1rem;
                padding: 0.2rem;
                width: 3.5rem;
                height: 2.5rem;
                cursor: pointer;
                color: #fafafa;
                background-color: #FA4C53;
            
                &:hover {
                    background-color: #EF3239;
                }
            }
        }
    }
`;

export const footer = css`
    display: flex;
    box-sizing: border-box;
    justify-content: center;
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

export const writeLayout = css`
    position: relative;
`;

export const writeButton = css`
    position: absolute;
    left: 55rem;
    width: 8rem;
    height: 2.5rem;
    border: none;
    border-radius: 0.5rem;
    background-color: #464667;
    color: #fafafa;
    cursor: pointer;

    &:hover {
        background-color: #3A3A4B;
    }
`;