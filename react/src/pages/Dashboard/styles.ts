import styled from 'styled-components';

export const Title = styled.h1`
  color: #3a3a3a;
  font-size: 48px;
  margin-top: 80px;
  max-width: 450px;
`;

export const Repositories = styled.div`
  margin-top: 80px;

  a {
    display: block;
    text-decoration: none;
  }

  a + a {
    margin-top: 16px;
  }
`;
