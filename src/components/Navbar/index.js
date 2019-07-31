// @flow

import * as React from 'react';

import Navbar from './Navbar';

function NavbarContainer() {
  const [modalSignInVisible, setModalSignInVisible] = React.useState(false);
  const [modalRegisterVisible, setModalRegisterVisible] = React.useState(false);

  return (
    <Navbar
      modalSignInVisible={modalSignInVisible}
      setModalSignInVisible={setModalSignInVisible}
      modalRegisterVisible={modalRegisterVisible}
      setModalRegisterVisible={setModalRegisterVisible}
    />
  );
}

export default NavbarContainer;
