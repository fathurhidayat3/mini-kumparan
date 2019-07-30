import React from 'react';
import {NavbarContainer, NavbarPart} from './style';

import {Button} from 'antd';

import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <NavbarContainer>
      <NavbarPart>Logo</NavbarPart>
      <NavbarPart justifyContent={'center'}>Searchbox</NavbarPart>
      <NavbarPart justifyContent={'flex-end'}>
        <Link to="sign-in">
          <Button type={'primary'}>Sign In</Button>
        </Link>
      </NavbarPart>
    </NavbarContainer>
  );
}

export default Navbar;
