import React from 'react';

import { CardConteiner } from './style';

const Card = ( { children }) => {
  return(
    <CardConteiner>
      { children }
    </CardConteiner>
  )
}

export default Card;