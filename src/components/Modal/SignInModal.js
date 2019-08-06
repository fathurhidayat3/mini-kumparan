// @flow

import * as React from 'react';
import {Modal, Input, Tooltip, Icon, Button} from 'antd';
import styled from 'styled-components';
import {withRouter} from 'react-router-dom';

import RegisterModal from './RegisterModal';

import AuthContext from '../../contexts/AuthContext';

import handleSignIn from '../../utils/handleSignIn';

type Props = {
  modalSignInVisible: boolean,
  setModalSignInVisible: Function,
  modalRegisterVisible: Boolean,
  setModalRegisterVisible: Function,
};

function SignInModal(props: Props) {
  const {
    modalSignInVisible,
    setModalSignInVisible,
    modalRegisterVisible,
    setModalRegisterVisible,
  } = props;

  const {setUserdata} = React.useContext(AuthContext);

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showRegister, setShowRegister] = React.useState(false);

  const [confirmLoading, setConfirmLoading] = React.useState(false);

  function successLoginModal() {
    Modal.success({
      title: 'Login Success',
      content: 'Now you able to create story, and many more',
      okText: 'OK, got it',
    });
  }

  function errorLoginModal(message) {
    Modal.error({
      title: 'Login Failed',
      content: message,
      okText: 'OK, got it',
    });
  }

  function checkSignInStatus(data, setUserdata) {
    setConfirmLoading(false);

    if (data && data.token) {
      setModalSignInVisible(false);

      successLoginModal();

      localStorage.setItem('user-data', JSON.stringify(data));

      setUserdata(data);
    } else {
      errorLoginModal(data.error.message);

      setShowRegister(true);
    }
  }

  return (
    <>
      <Modal
        title="Sign in to do something cooler"
        centered
        visible={modalSignInVisible}
        confirmLoading={confirmLoading}
        onCancel={() => setModalSignInVisible(false)}
        onOk={() => {
          setConfirmLoading(true);

          handleSignIn(username, password).then(async data => {
            checkSignInStatus(data, setUserdata);
          });
        }}>
        <FormGroup>
          <Input
            value={username}
            onChange={e => setUsername(e.target.value)}
            placeholder="Enter your username/email"
            prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}} />}
            suffix={
              <Tooltip title="You can use either username or email to continue">
                <Icon type="info-circle" style={{color: 'rgba(0,0,0,.45)'}} />
              </Tooltip>
            }
          />
        </FormGroup>

        <FormGroup>
          <Input.Password
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Enter your password"
            prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}} />}
            suffix={
              <Tooltip title="Make sure you don't share your credential data">
                <Icon type="info-circle" style={{color: 'rgba(0,0,0,.45)'}} />
              </Tooltip>
            }
          />
        </FormGroup>

        {showRegister && (
          <Button
            onClick={() => {
              setModalSignInVisible(false);
              setModalRegisterVisible(true);
            }}>
            Register here
          </Button>
        )}
      </Modal>

      <RegisterModal
        modalRegisterVisible={modalRegisterVisible}
        setModalRegisterVisible={setModalRegisterVisible}
      />
    </>
  );
}

const FormGroup = styled.div`
  margin-bottom: 16px;
`;

export default withRouter(SignInModal);
