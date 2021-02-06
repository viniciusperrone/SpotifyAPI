import styled from 'styled-components';

export const HeaderConteiner = styled.header`
  height: 80px;
  width: 100vw;

  grid-area: header;
  display: flex;

  position: absolute;
  
  justify-content: flex-start;

  background: var(--color-background-header);

  color: #fff;
  font-size: 12px; 

  img {
    align-self: center;
    justify-self: start;
    margin-left: 60px;
    margin-right: 800px;
  }


  /* background: rgba(99,26,134,.2); */
`;