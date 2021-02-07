import React from 'react';

import { AiOutlineSearch } from 'react-icons/ai';

import SpotifyLogo from '../../assets/spotify_logo.svg';

import ButtonHeader from '../../components/ButtonHeader';
import Background from '../../components/Background';
import Header from '../../components/Header';

import { MainContent } from './style';

const Dashboard = () => {
  return (
    <>
      <Background>
        <Header>
         <img src={SpotifyLogo} alt="logo spotify"/>
          <ButtonHeader name="1">
            <h2>Premium</h2>  
          </ButtonHeader>

          <ButtonHeader name="2">
            <h2>Suporte</h2>  
          </ButtonHeader>

          <ButtonHeader name="3">
            <h2>Baixar</h2>  
          </ButtonHeader>
        </Header>
        <MainContent>
          <AiOutlineSearch sizy={30}/>
        
          
        </MainContent>
        <AiOutlineSearch sizy={30}/>
      </Background>
    </>
  )
}

export default Dashboard;