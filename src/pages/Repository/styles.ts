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
    display: block;
    text-decoration: none;
  }

  a + a {
    margin-top: 16px;
  }
`;
