import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  color: #3a3a3a;
  font-size: 48px;
  margin-top: 80px;
  max-width: 450px;
`;

export const Form = styled.form`
  display: flex;
  margin-top: 40px;
  max-width: 700px;

  input {
    border: none;
    border-radius: 5px 0 0 5px;
    flex: 1;
    height: 70px;
    padding: 0 24px;
    font-family: Roboto;
    font-size: 20px;
    line-height: 23px;
    color: #a3a3a3;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    background: #04d361;
    border: none;
    border-radius: 0 5px 5px 0;
    color: #ffffff;
    font-size: 18px;
    font-weight: bold;
    height: 70px;
    line-height: 21px;
    transition: 0.2s ease-in-out background-color;
    width: 210px;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a {
    align-items: center;
    background: #fff;
    border-radius: 5px;
    display: flex;
    opacity: 0.8;
    padding: 24px;
    text-decoration: none;
    transition: transform 0.2s ease-in-out;
    width: 100%;

    & + a {
      margin-top: 16px;
    }

    &:hover {
      opacity: 1;
      transform: translateX(16px);
    }
  }

  img {
    border-radius: 50%;
    height: 64px;
    margin-right: 16px;
    width: 64px;
  }

  div {
    strong {
      color: #3d3d4d;
      font-size: 20px;
    }

    p {
      color: #a8a8b3;
      font-size: 18px;
      margin-top: 4px;
    }
  }

  svg {
    color: #cbcbd6;
    display: block;
    margin-left: auto;
    pointer-events: none;
  }
`;