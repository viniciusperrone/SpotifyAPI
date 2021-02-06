import styled from 'styled-components';

export const ConteinerBackground = styled.div`
  width: 100%;
  height: 100%;
  
  background-color: var(--color-background);
  
  position: absolute;
  display: grid;

  grid-template-rows: 1fr 4fr 5fr 2fr;
  grid-template-columns: repeat(3, 1fr);

  grid-template-areas: 
    "header header header"
    "main main main"
    "main main main"
    "footer footer footer";

  margin: 0;
  padding: 0;

  button a {
    text-decoration: none;
    color: #fff;
  }

`;