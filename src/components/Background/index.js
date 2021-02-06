import React from 'react';

import { ConteinerBackground } from './style';

const Background = ( { children }) => {
  
  return(
    <ConteinerBackground>
      { children }
    </ConteinerBackground>
  )
}

export default Background;