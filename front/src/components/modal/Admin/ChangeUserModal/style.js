import { css } from "@emotion/react";

export const modalTop = css`
    display: flex;
    justify-content: flex-end;
    font-size: 2.5rem;
    & > div {
        cursor: pointer;
        & > svg {
            fill: #d15a5a;
            &:hover {
                fill: #ff0000;
            }
        }
    }
`;

export const header = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 5rem;
`;

export const headerIcon = css`
    font-size: 8rem;
    & path {
        fill: #464667;
    }
`;

export const headerTitle = css`
    margin: 0.5rem;
    font-size: 2rem;
`;

export const headerMessage = css`
    text-align: center;
    font-size: 1.5rem;
    color: #5a5a5a;
`;

export const main = css`
    display: flex;
    flex-direction: column;
`;

export const inputBox = css`
    display: flex;
    align-items: center;
    margin-top: 1.3rem;
    padding: 0 5rem;

    & > label {
    width: 7.5rem;
    margin-right: 1.5rem;
    text-align: left;
    font-size: 1.8rem;
    }
    & > input {
        box-sizing: border-box;
        outline: none;
        border: 0;
        border-bottom: 0.2rem dotted #464667;
        padding: 0.5rem 1rem;
        flex-grow: 1;
        font-size: 1.5rem;
        color: #666666;
        background-color: #ffffff;
    }
`;

export const errorMessage = css`
    margin: 0;
    padding: 0 5rem;
    & > p {
        margin: 0;
        padding: 0 1rem;
        font-size: 1.2rem;
        color: #ff4949;
    } 
`;

export const changeButtonBox = css`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 1rem 3rem;
    height: 5rem;
`;

export const changeButton = css`
    box-sizing: border-box;
    border: 0.2rem solid #464667;
    border-radius: 0.5rem;
    background-color: #8f87dc;
    color: #ffffff;
    font-size: 1.8rem;
    cursor: pointer;

    &:disabled {
        border: 0.2rem solid #dbdbdb;
        background-color: #dbdbdb;
        color: #949494;
        pointer-events: none;
    }

    &:hover {
        background-color: #636394;
        color: #ffffff;
    }
    &:active {
        background-color: #464667;
        color: #ffffff;
    }
`;