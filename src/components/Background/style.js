import styled from 'styled-components';

export const ConteinerBackground = styled.div`
  width: 100%;
  height: 100%;
  
  background-color: var(--color-background);
  
  display: grid;

  grid-template-rows: 1fr 4fr 3fr 4fr;
  grid-template-columns: repeat(3, 1fr);

  grid-template-areas: 
    "header header header"
    "main main main"
    "main main main"
    "footer footer footer";

  margin: 0;
  padding: 0;

  main {
    grid-area: main;
    width: 100vw;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  button a {
    text-decoration: none;
    color: #fff;
  }
  footer{
    grid-area: footer;
    width: 100vw;
    height: 100%;
    background-color: #f7f8;
    align-items: center;
    justify-content: center;

  }
  

`;