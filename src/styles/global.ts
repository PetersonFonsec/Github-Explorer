import { createGlobalStyle } from 'styled-components';
import githubBackground from '../assets/github.svg';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: 0;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background: #E5E5E5 url(${githubBackground}) no-repeat 70% top;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  button {
    cursor: pointer;
  }
`;
