import React from 'react';

import { HeaderConteiner } from './style';
const Header = ( { children } ) => {
  return(
    <>
      <HeaderConteiner>
        { children }
      </HeaderConteiner>
    </>
    
  )
}

export default Header;