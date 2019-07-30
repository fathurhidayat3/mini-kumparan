// @flow

import * as React from 'react';
import {Button} from 'antd';

import {NavbarContainer, NavbarPart} from './style';
import SignInModal from '../Modal/SignInModal';

function Navbar(props: any) {
  const {modalSignInVisible, setModalSignInVisible} = props;
  return (
    <NavbarContainer>
      <NavbarPart>Logo</NavbarPart>
      <NavbarPart justifyContent={'center'}>Searchbox</NavbarPart>
      <NavbarPart justifyContent={'flex-end'}>
        <Button type={'primary'} onClick={() => setModalSignInVisible(true)}>
          Sign In
        </Button>
      </NavbarPart>

      <SignInModal
        modalSignInVisible={modalSignInVisible}
        setModalSignInVisible={setModalSignInVisible}
      />
    </NavbarContainer>
  );
}

export default Navbar;
