import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    box-sizing: border-box;
    align-items: center;
    flex-direction: column;
    margin-top: 4rem;
    overflow: hidden;
    width: 150rem;
    height: 100%;
    background-color: #ffffff;
`;

export const titleGroup = css`
  display: flex;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;
`;


export const title1 = css`
    display: flex;
    justify-content: center;
    margin: 0;
    font-size: 6rem;
    color: #464667;
    cursor: default;
    font-weight: 500;
`;

export const title2 = css`
    display: flex;
    justify-content: center;
    margin: 0;
    font-size: 3.6rem;
    color: #464667;
    cursor: default;
    font-weight: 400;
`;

export const inputGroup = css`
  display: flex;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;
  margin-top: 2rem;
  width: 60rem;
  height: 40rem;
  
`;

export const input = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  width: 60rem;
  font-size: 2rem;
  border-bottom: 0.1rem solid #3283CE;

  & > label {
    width: 10rem;
    margin-right: 2rem;
    text-align: left;
    line-height: 8rem;

  }

  & > div:nth-of-type(1) {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 50rem;

    & > input {
      position: absolute;
      transform: translateY(-50%);
      width: 48rem;
      border: none;
      font-size: 2.5rem;
  
      &:focus {
        outline: none;
        border: none;
      }
  
      &::placeholder{
      font-size: 2rem;
      color: #9F9F9F;
      }
    }
  
    & > p {
      position: absolute;
      transform: translateY(100%);
      margin: 0;
      height: 1.2rem;
      font-size: 1.2rem;
      color: #ff4949;
      visibility: visible;
    }
  }
`;

export const input2 = css`
  display: flex;
  align-items: center;
  width: 60rem;
  height: 8.4rem;
  font-size: 2rem;
  border-bottom: 0.1rem solid #3283CE;

  & > label {
    width: 9.8rem;
    margin-right: 2rem;
    text-align: left;
    font-size: 2rem;

  }

  & > select {
    width: 30rem;
    height: 5rem;
    border-radius: 0.5rem;
    font-size: 2rem;
  }

`;

export const button = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;

  & > button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 54rem;
    height: 9.6rem;
    background-color: #464667;
    outline: none;
    border-radius: 1.5rem;
    color: #ffffff;
    font-size: 3.6rem;
    cursor: pointer;
  }

  & > button:hover {
    background-color: #505070;
  }

`;