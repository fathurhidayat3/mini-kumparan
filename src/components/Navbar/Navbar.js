// @flow

import * as React from 'react';
import {Button, Avatar, Menu, Dropdown, Input} from 'antd';
import {Link, withRouter} from 'react-router-dom';

import {NavbarContainer, NavbarPart} from './style';
import SignInModal from '../Modal/SignInModal';

import handleLogout from '../../utils/handleLogout';

import AuthContext from '../../contexts/AuthContext';

const {Search} = Input;

function Navbar(props: any) {
  const {modalSignInVisible, setModalSignInVisible} = props;

  const menuItems = setUserdata => (
    <Menu>
      <Menu.Item>
        <Link to={'/profile'}>Profile</Link>
      </Menu.Item>
      <Menu.Item>
        <Button onClick={() => handleLogout(setUserdata({}))}>Logout</Button>
      </Menu.Item>
    </Menu>
  );

  return (
    <AuthContext.Consumer>
      {({userdata, setUserdata}) => {
        return (
          <NavbarContainer>
            <NavbarPart>
              <h3 style={{fontWeight: 'bold'}}>Mini Kumparan</h3>
            </NavbarPart>

            <NavbarPart justifyContent={'center'}>
              <Search
                placeholder="input search text"
                onSearch={value => console.log(value)}
                enterButton
              />
            </NavbarPart>

            <NavbarPart justifyContent={'flex-end'}>
              {userdata ? (
                <>
                  <Button
                    type={'primary'}
                    onClick={() => setModalSignInVisible(true)}
                    style={{marginRight: 16}}>
                    Write Story
                  </Button>
                  <Dropdown
                    overlay={() => menuItems(setUserdata)}
                    placement="bottomRight">
                    <Avatar icon="user" />
                  </Dropdown>
                </>
              ) : (
                <Button
                  type={'primary'}
                  onClick={() => setModalSignInVisible(true)}>
                  Sign In
                </Button>
              )}
            </NavbarPart>

            <SignInModal
              modalSignInVisible={modalSignInVisible}
              setModalSignInVisible={setModalSignInVisible}
            />
          </NavbarContainer>
        );
      }}
    </AuthContext.Consumer>
  );
}

export default withRouter(Navbar);
