import { css } from "@emotion/react";

export const mainlayout = css`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    height: 100%;

    & > h1 {
        font-size: 3rem;
        margin: 1rem 0;
    }

    & > p {
        font-size: 1.5rem;
        margin: 0.5rem 0;
    }

    & > p:nth-of-type(3) {
        height: 50rem;
        flex-grow: 1;
    }
`;

export const header = css`
    display: block;
    padding-right: 5rem;
`;

export const headerCloseButton = css`
    position: absolute;
    top: 1rem;
    right: 1rem;
    background-color: transparent;
    border: none;
    font-size: 3rem;
    cursor: pointer;
`;

export const buttonLayout = css`
    display: flex;
    justify-content: center;
`;

export const closeButton = css`
    display: flex;
    align-items: center;
    background-color: #464667;
    color: #fafafa;
    border-radius: 0.5rem;
    border: 1px solid #dbdbdb;
    font-size: 1.5rem;
    
    height: 3rem;
    cursor: pointer;

    &:hover {
        background-color: #37374b;
    }
`;

export const modifyButton = css`
    display: flex;
    align-items: center;
    background-color: #24AAE1;
    color: #fafafa;
    border-radius: 0.5rem;
    border: 1px solid #dbdbdb;
    font-size: 1.5rem;
    
    height: 3rem;
    cursor: pointer;

    &:hover {
        background-color: #1E8BB0;
    }
`;

