// @flow

import * as React from 'react';
import {Button, Avatar, Menu, Dropdown, Input} from 'antd';
import {Link, withRouter} from 'react-router-dom';

import {NavbarContainer, NavbarPart} from './style';
import SignInModal from '../Modal/SignInModal';

import AuthContext from '../../contexts/AuthContext';
import FilterContext from '../../contexts/FilterContext';

import HeadingText from '../HeadingText';

import handleLogout from '../../utils/handleLogout';

const {Search} = Input;

function Navbar(props: any) {
  const {
    modalSignInVisible,
    setModalSignInVisible,
    modalRegisterVisible,
    setModalRegisterVisible,
  } = props;

  const menuItems = (userdata, setUserdata) => (
    <Menu style={{width: 120}}>
      <Menu.Item>
        <Link to={`/profile/${userdata.username}`}>Profile</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to={`/dashboard/story`}>Dashboard</Link>
      </Menu.Item>
      <Menu.Item>
        <Button
          onClick={() =>
            handleLogout(() => {
              setUserdata({});
            })
          }>
          Logout
        </Button>
      </Menu.Item>
    </Menu>
  );

  return (
    <AuthContext.Consumer>
      {({userdata, setUserdata}) => {
        return (
          <FilterContext.Consumer>
            {({setFilterData}) => {
              return (
                <NavbarContainer>
                  <NavbarPart>
                    <HeadingText
                      type={'h3'}
                      style={{color: '#00a1b0', cursor: 'pointer'}}
                      onClick={() => {
                        setFilterData({category: ''});
                        props.history.push('/');
                      }}>
                      Mini Kumparan
                    </HeadingText>
                  </NavbarPart>

                  <NavbarPart justifyContent={'center'}>
                    <Search
                      placeholder="input search text"
                      onSearch={keyword => {
                        setFilterData({keyword});
                        props.history.push('/');
                      }}
                    />
                  </NavbarPart>

                  <NavbarPart justifyContent={'flex-end'}>
                    {userdata && userdata.token ? (
                      <>
                        <Button
                          type={'primary'}
                          onClick={() => props.history.push('/story/write')}
                          style={{marginRight: 16}}>
                          Write Story
                        </Button>
                        <Dropdown
                          overlay={() => menuItems(userdata, setUserdata)}
                          placement="bottomRight">
                          <Button>Hello {userdata.fullname}</Button>
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
                    modalRegisterVisible={modalRegisterVisible}
                    setModalRegisterVisible={setModalRegisterVisible}
                  />
                </NavbarContainer>
              );
            }}
          </FilterContext.Consumer>
        );
      }}
    </AuthContext.Consumer>
  );
}

export default withRouter(Navbar);
