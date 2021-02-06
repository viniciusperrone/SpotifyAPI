import React from 'react';

import { ButtonTop } from './style';

const ButtonHeader = ( props ) => {
  return(
    <>
    <ButtonTop style={{ alignSelf: `flex-end`, zIndex: `${props.name}`}}>
      { props.children }
    </ButtonTop>
    </>
  )
}

export default ButtonHeader;