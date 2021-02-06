import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import  getHashParams from '../../token';

import SpotifyLogo from '../../assets/spotify_logo.svg';
import GithubLogo from '../../assets/github_logo.svg';

import EdSherranCard from '../../assets/ed_sheeran.svg';
import EddieVedderCard from '../../assets/eddie_vedder.svg';
import ShawnMendesCard from '../../assets/shawn_mendes.svg';

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
              <Card>
                <img src={EdSherranCard} alt=""/>
              </Card>
              <Card>
                <img src={EddieVedderCard} alt=""/>
              </Card>
              <Card>
                <img src={ShawnMendesCard} alt=""/>
              </Card>
            </ContextCard>
          
          
        </MainConteiner>
        <Footer>
          <img src={GithubLogo} alt=""/>
          <h3>Github</h3>
        </Footer>
      </Background>
    
      
    </>
  )
}

export default Home;