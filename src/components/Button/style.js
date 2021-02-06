import styled from 'styled-components';

export const ButtonMain = styled.button`
  background-color: var(--color-background-button);
  color: #000000;
  letter-spacing: 2px;
  font-size: 16px;
  font: 400 2.5rem Lexend Mega; 
  line-height: 1.2;
  width: 320px;
  height: 56px;
  border-radius: 500px;

  }
  &:hover{
    background-color: rgba(29, 185, 84, 0.3);
    transition: all 1s;
    a{
      &:hover{
        color: #ccc;
  } 
  }

`;