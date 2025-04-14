import { css } from "@emotion/react";

export const layout = css`
    margin-left: 10rem;
    width: 108rem;
    height: 70rem;
`;

export const container = css`
    display: flex;
    flex-direction: column;
    padding: 3rem;
`;

export const title = css`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
    font-size: 4rem;
    font-weight: 400;
    color: #464667;
    border-bottom: 0.1rem solid #464667;

    cursor: default;
    
    & > p {
        margin: 0;
        padding: 0 0 1rem 1.5rem;
    }
`;

export const accountBox = css`
    display: flex;
`;

export const profileImgBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20rem;
    height: 20rem;

    & > svg {
        width: 17rem;
        height: 17rem;
        color: #464667;
    }
`;

export const userInfoBox = css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 2rem;
`;

export const userBox = css`
    display: flex;
    align-items: flex-end;
`;

export const usernameBox = css`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    margin: 1.5rem 3rem 0;
    border-bottom: 0.2rem dotted #464667;
    height: 5rem;
    font-size: 3.8rem;
    color: #1c1c1c;

    & > span:nth-of-type(2) {
        padding-left: 1.2rem;
        color: #464667;
    }
`;

export const myNoticeButton = css`
    
    & > button {
        border: 0.2rem solid #464667;
        border-radius: 0.5rem;
        width: 12rem;
        height: 2.5rem;
        background-color: #bab6dd;
        text-align: center;
        font-weight: 600;
        cursor: pointer;
    }
`;

export const accountLayout = css`
    display: flex;
    flex-direction: column;
`;

export const accountLine = css`
    display: flex;
    align-items: end;
    margin-left: 3rem;
    border-bottom: 0.2rem dotted #464667;
    font-size: 3rem;

    & > div:nth-of-type(1) {
        color: #464667;
    }
    & > div:nth-of-type(2) {
        font-size: 2.5rem;
        color: #1c1c1c;
    }
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

export const elementBox = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const contentBox = css`
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
    padding-left: 2rem;
    font-size: 3rem;

    & > div:nth-of-type(1) {
        margin-right: 2rem;
        width: 25rem;
        font-size: 3rem;
        color: #464667;
    }

    & > span {
        font-size: 1.7rem;
        color: #434343;
        padding-top: 1rem;
    }

    & > div:nth-of-type(2) {
        font-size: 2.7rem;
    }
`;

export const changeButton = css`
    width: 8rem;
    height: 4rem;
    border: 0.2rem solid #464667;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    transform: translateY(-5px);
    font-size: 1.7rem;
    font-weight: 600;
    background-color: #bab6dd;
    cursor: pointer;
    
    &:hover {
        background-color: #636394;
        color: #ffffff;
    }

    &:active {
        background-color: #464667;
        color: #ffffff;
    }
`;