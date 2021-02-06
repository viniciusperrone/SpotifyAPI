import React from 'react';

import { ButtonMain } from './style';

const Button = ( { children } )  => {
  return(
    <ButtonMain>
      { children }
    </ButtonMain>
  )
}

export default Button;