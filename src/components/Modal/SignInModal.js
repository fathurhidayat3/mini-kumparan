// @flow

import * as React from 'react';
import {Modal, Input, Tooltip, Icon, Typography} from 'antd';
import styled from 'styled-components';
import {withRouter} from 'react-router-dom';

import AuthContext from '../../contexts/AuthContext';

import handleSignIn from '../../utils/handleSignIn';

const {Text} = Typography;

function SignInModal(props: any) {
  const {modalSignInVisible, setModalSignInVisible} = props;

  const [username, setUsername]: any = React.useState('');
  const [password, setPassword]: any = React.useState('');
  const [showRegister, setShowRegister]: any = React.useState(false);

  const [confirmLoading, setConfirmLoading]: any = React.useState(false);

  function successLoginModal() {
    Modal.success({
      title: 'Login Success',
      content: 'Now you able to create story, and many more',
      okText: 'OK, got it',
    });
  }

  function errorLoginModal() {
    Modal.error({
      title: 'Login Failed',
      content: 'Now you able to create story, and many more',
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
      errorLoginModal();

      setShowRegister(true);
    }
  }

  return (
    <AuthContext.Consumer>
      {({setUserdata}) => {
        return (
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
                    <Icon
                      type="info-circle"
                      style={{color: 'rgba(0,0,0,.45)'}}
                    />
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
                    <Icon
                      type="info-circle"
                      style={{color: 'rgba(0,0,0,.45)'}}
                    />
                  </Tooltip>
                }
              />
            </FormGroup>

            {showRegister && <Text>Register here</Text>}
          </Modal>
        );
      }}
    </AuthContext.Consumer>
  );
}

const FormGroup = styled.div`
  margin-bottom: 16px;
`;

export default withRouter(SignInModal);
