import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root{
    font-size: 60%;
    --color-background: #275F68;
    --color-background-header: #1F2032;
    --color-background-button: #1DB954;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root{
    height: 100vh;
    width: 100vw;

    margin: 0;
    padding: 0;
  }

  body{
    background: #f5f5f5;
  }

  button {
    border: none;
  }

`;