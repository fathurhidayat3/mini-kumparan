// @flow

import * as React from 'react';

import DashboardNavbar from './DashboardNavbar';

function NavbarContainer() {
  const [modalSignInVisible, setModalSignInVisible] = React.useState(false);
  const [modalRegisterVisible, setModalRegisterVisible] = React.useState(false);

  return (
    <DashboardNavbar
      modalSignInVisible={modalSignInVisible}
      setModalSignInVisible={setModalSignInVisible}
      modalRegisterVisible={modalRegisterVisible}
      setModalRegisterVisible={setModalRegisterVisible}
    />
  );
}

export default NavbarContainer;
