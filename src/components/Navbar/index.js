// @flow

import * as React from 'react';

import Navbar from './Navbar';

function NavbarContainer() {
  const [modalSignInVisible, setModalSignInVisible] = React.useState(false);

  return (
    <Navbar
      modalSignInVisible={modalSignInVisible}
      setModalSignInVisible={setModalSignInVisible}
    />
  );
}

export default NavbarContainer;
