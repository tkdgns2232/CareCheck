import { css } from "@emotion/react";

export const container = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 3rem;
    width: 100%;
    height: 100%;
`;

export const title = css`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    margin: 1rem 2rem;
    font-size: 3rem;
    font-weight: 400;
    color: #464667;
    border-bottom: 0.1rem solid #464667;

    cursor: default;
    
    & > p {
        margin: 0;
        padding: 0 0 1rem 1.5rem;
    }
`;

export const navigateButton = css`
    border: none;
    padding: 0;
    background-color: transparent;
    cursor: pointer;

    & > svg {
        width: 3rem;
        height: 3rem;
        color: #464667;
    }
`;

export const main = css`
    display: flex;
`;

export const profileImgBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20rem;
    height: 20rem;

    & > svg {
        width: 19rem;
        height: 19rem;
        color: #464667;
    }
`;

export const userBox = css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const userInfoBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 1.5rem 3rem 0;
    
    font-size: 3rem;
    color: #1c1c1c;
`;

export const usernameBox = css`
    display: flex;
    & > span:nth-of-type(1) {
        font-weight: 600;
        border-bottom: 0.2rem dotted #464667;
    }
    & > span:nth-of-type(2) {
        padding-left: 1.2rem;
        color: #464667;
    }
`;

export const accountBox = css`
    display: flex;
    align-items: center;
    border-bottom: 0.2rem dotted #464667;
`;

export const infoTitle = css`
    display: inline;
    margin-right: 4rem;
    width: 14rem;
    line-height: 0.2;
    text-align: justify;
    &::before, &::after {
        content: "";
        display: inline-block;
        width: 100%;
    }
`;