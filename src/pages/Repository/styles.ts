import styled from 'styled-components';

export const Header = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;

  a {
    align-items: center;
    color: #a8a8b3;
    display: flex;
    text-decoration: none;
    transition: 0.2s ease-in-out color;

    &:hover {
      color: #666;
    }

    svg {
      margin-right: 4px;
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header {
    align-items: center;
    display: flex;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }
  }

  div {
    margin-left: 24px;

    strong {
      color: #3d3d4d;
      font-size: 36px;
    }

    p {
      font-size: 18px;
      color: #737380;
      margin-top: 4px;
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    strong {
      display: block;
      font-size: 36px;
      color: #3d3d4d;
    }

    span {
      display: block;
      margin-top: 4px;
      color: #6c6c8c;
    }

    li + li {
      margin-left: 80px;
    }
  }
`;

export const Issues = styled.div`
  margin-top: 80px;

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

  div {
    flex: 1;
    margin: 0 16px;

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
