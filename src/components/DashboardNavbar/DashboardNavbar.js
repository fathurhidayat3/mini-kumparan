// @flow

import * as React from 'react';
import {Button, Menu, Dropdown} from 'antd';
import {Link, withRouter} from 'react-router-dom';

import {NavbarContainer, NavbarPart} from './style';
import SignInModal from '../Modal/SignInModal';

import handleLogout from '../../utils/handleLogout';

import AuthContext from '../../contexts/AuthContext';
import FilterContext from '../../contexts/FilterContext';

import HeadingText from '../HeadingText';

type Props = {
  modalSignInVisible: boolean,
  setModalSignInVisible: Function,
  modalRegisterVisible: boolean,
  setModalRegisterVisible: Function,
  history: Object,
};

function Navbar(props: Props) {
  const {
    modalSignInVisible,
    setModalSignInVisible,
    modalRegisterVisible,
    setModalRegisterVisible,
  } = props;

  const {userdata, setUserdata} = React.useContext(AuthContext);
  const {setFilterData} = React.useContext(FilterContext);

  const menuItems = (userdata, setUserdata) => (
    <Menu style={{width: 120}}>
      <Menu.Item>
        <Link to={`/`}>Home</Link>
      </Menu.Item>

      <Menu.Item>
        <Link to={`/profile/${userdata.username}`}>Profile</Link>
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
    <NavbarContainer>
      <NavbarPart>
        <HeadingText
          type={'h3'}
          style={{color: '#00a1b0', cursor: 'pointer'}}
          onClick={() => {
            setFilterData({category: ''});
            props.history.push('/dashboard/story');
          }}>
          Mini Kumparan Dashboard
        </HeadingText>
      </NavbarPart>

      <NavbarPart justifyContent={'flex-end'}>
        {userdata && userdata.token ? (
          <>
            <Dropdown
              overlay={() => menuItems(userdata, setUserdata)}
              placement="bottomRight">
              <Button>Hello {userdata.fullname}</Button>
            </Dropdown>
          </>
        ) : (
          <Button type={'primary'} onClick={() => setModalSignInVisible(true)}>
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
}

export default withRouter(Navbar);
