import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import  getHashParams from '../../token';

import Background from '../../components/Background';
import Header from '../../components/Header';
import ButtonHeader from '../../components/ButtonHeader';
import Button from '../../components/Button';

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
          <ButtonHeader name="1">
            <h2>Premium</h2>  
          </ButtonHeader>

          <ButtonHeader name="2">
            <h2>Suporte</h2>  
          </ButtonHeader>

          <ButtonHeader name="3">
            <h2>Baixer</h2>  
          </ButtonHeader>
         
        </Header>
        <main>
          <h1>Sign In</h1>
          <Button>
            <Link to="http://localhost:8888">START</Link>
          </Button>
        </main>
        <footer>
          <h3>Spotify</h3>
          <p>Empresa</p>
          <p>Comunidade</p>
          <p>Links Úteis</p>
        </footer>
      </Background>
    
      
    </>
  )
}

export default Home;