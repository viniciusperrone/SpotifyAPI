import styled from 'styled-components';

export const MainConteiner = styled.main`
  grid-area: main;
  
  
  width: 100vw;
  height: 100%;
  
  display: grid;

  position: absolute;

  grid-template-rows: repeat(5, 1fr);
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: 
    "dashboard music music"
    "dashboard music music"
    "dashboard music music"
    "dashboard music music"
    "dashboard music music";


`;

export const DashboardConteiner = styled.div`
  grid-area: dashboard;

  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: #fff;

  h1{
    font-weight: 900;
    font: 500 5rem Noto Serif;
    letter-spacing: -0.04em;
    line-height: 1.15;
  }

  h2{
    margin-top: 8px;
    font: 500 3rem Oswald;
    font-weight: 900;
    line-height: 1.4;
  }

  button{
    margin-top: 30px;
  }
`;

export const ContextCard = styled.div`
  width: 100%;
  height: 100%;

  grid-area: music;
  position: absolute;

  display: flex;
  flex-direction: row;

  justify-content: center;
  align-items: center;



`;

export const Footer = styled.footer`
  width: 100vw;
  height: 100%;

  grid-area: footer;
  
  background-color: var(--color-background-header);
  color: #fff;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  h3 {
    font: 500 1.5rem Noto Serif;
  }
`;