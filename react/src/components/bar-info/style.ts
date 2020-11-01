import styled from 'styled-components';

export const Bar = styled.div`
  article {
    align-items: center;
    background: #fff;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    max-width: 700px;
    opacity: 0.8;
    padding: 24px;
    text-decoration: none;
    transition: transform 0.2s ease-in-out;
    width: 100%;

    &:hover {
      opacity: 1;
      transform: translateX(16px);
    }
  }

  img {
    border-radius: 50%;
    height: 64px;
    width: 64px;
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
