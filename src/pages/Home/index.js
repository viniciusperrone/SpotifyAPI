import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import  getHashParams from '../../token';

import SpotifyLogo from '../../assets/spotify_logo.svg';

import Background from '../../components/Background';
import Header from '../../components/Header';
import ButtonHeader from '../../components/ButtonHeader';
import Button from '../../components/Button';
import Card from '../../components/Card';

import { MainConteiner, DashboardConteiner, Footer, ContextCard} from './style';

const Home = () => {

  // const [params, setParams] = useState();
  // const [token, setToken] = useState();

  // useEffect(() => {
  //   setParams(getHashParams())
  //   setToken(params.access_token);
  // }, [params.access_token])

  // console.log(params)
  // console.log(token);

  return(
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

        <MainConteiner>
          <DashboardConteiner>
            <h1>Search</h1>
            <h2>Albums, Artists and Favorite Songs</h2>
            <Button>
              <Link to="http://localhost:8888">START</Link>
            </Button>
          </DashboardConteiner>

          <ContextCard>
              <Card />
              <Card />
              <Card />
            </ContextCard>
          
          
        </MainConteiner>
        <Footer>
          <h3>Spotify</h3>
          <p>Empresa</p>
          <p>Comunidade</p>
          <p>Links Úteis</p>
        </Footer>
      </Background>
    
      
    </>
  )
}

export default Home;