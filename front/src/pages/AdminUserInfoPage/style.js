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
`;

export const title = css`
    display: flex;

    & > h2 {
        margin: 0.5rem 0;
        font-size: 2.5rem;
        font-weight: 400;
        color: #2c2c43;
    }
`;

export const searchItems = css`
    display: flex;
    padding-right: 3rem;

    & > Select {
        font-size: 1.5rem;
    }
`;

export const searchInput = css`
    margin-left: 0.8rem;
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
    }
`;

export const main = css`
    padding: 1rem;
    height: 55rem;
`;

export const userListContainer = css`
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
            box-sizing: border-box;
            font-size: 1.5rem;
        }

        & > div:not(& > div:nth-last-of-type(1)) {
            margin: 0 1rem 0 0.5rem;
            border-right: 0.1rem solid #dbdbdb;
        }

        & > div:nth-of-type(1) {
            padding-left: 0.5rem;
            width: 15rem;
        }

        & > div:nth-of-type(2) {
            width: 15rem;
        }

        & > div:nth-of-type(3) {
            width: 12rem;
        }

        & > div:nth-of-type(4) {
            width: 15rem;
        }

        & > div:nth-of-type(5) {
            flex-grow: 1;
        }

        & > div:nth-of-type(6) {
            width: 16.5rem;
        }

        & > div:nth-of-type(7) {
            width: 16.5rem;
        }

        & > div:nth-of-type(8) {
            width: 16.5rem;
        }

        & > div:nth-of-type(9) {
            display: flex;
            align-items: center;
            width: 11rem;
            font-size: 1.1rem;

            & > button {
                box-sizing: border-box;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-right: 1rem;
                border: none;
                border-radius: 0.5rem;
                padding: 0;
                width: 4rem;
                height: 2rem;
                cursor: pointer;
                
                &:nth-of-type(1),
                &:nth-of-type(2) {
                    background-color: #464667;
                    & > svg {
                        width: 1.5rem;
                        height: 1.5rem;
                        color: #ffffff;
                    }
                }

                &:nth-of-type(3) {
                    background-color: #ff6161;
                    
                    & > svg {
                        width: 1.5rem;
                        height: 1.5rem;
                        color: #ffffff;
                    }
                }
            }
        }
    }
`;

export const footer = css`
    box-sizing: border-box;
    display: flex;
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