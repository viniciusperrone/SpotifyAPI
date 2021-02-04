import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root{
    font-size: 60%;
  }

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root{
    height: 100vh
  }

  body{
    background: #f5f5f5;
  }

  button {
    border: none;
  }

  button a{
    text-decoration: none;
  }

`;