import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import  getHashParams from '../../token';

import Background from '../../components/Background';
import Header from '../../components/Header';

const Home = () => {

  // const [params, setParams] = useState()
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
        <Header />
        <div>
          <h1>Sign In</h1>
          <button>
            <Link to="http://localhost:8888">start</Link>
          </button>
        </div>
      </Background>
    
      
    </>
  )
}

export default Home;