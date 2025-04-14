import { css } from "@emotion/react";

export const layout = css`
    margin-left: 20rem;
    width: 108rem;
    height: 70rem;
`;
export const container = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    font-size: 4rem;

    & > svg {
        color: #d02121;
        width: 15rem;
        height: 15rem;
    }

    & > h1 {
        color: #d02121;
        font-size: 5rem;
        cursor: default;
    }

    & > p:nth-of-type(1) {
        font-size: 3rem;
        cursor: default;
    }

    & > p:nth-of-type(2) {
        font-size: 2rem;
        cursor: default;

        & > Link {
            color: #464667
        }
    }
`;