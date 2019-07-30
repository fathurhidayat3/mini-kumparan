// @flow

import * as React from 'react';
import {Modal, Input, Tooltip, Icon} from 'antd';
import styled from 'styled-components';
import {withRouter} from 'react-router-dom';

import handleSignIn from '../../utils/handleSignIn';

function SignInModal(props: any) {
  const {modalSignInVisible, setModalSignInVisible} = props;

  const [userKey, setUserKey]: any = React.useState('');
  const [userPassword, setUserPassword]: any = React.useState('');
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

  function checkSignInStatus(data) {
    setTimeout(() => {
      setConfirmLoading(false);

      if (data.status === 200) {
        setModalSignInVisible(false);

        successLoginModal();

        props.history.push('/');
      } else {
        errorLoginModal();
      }
    }, 1000);
  }

  return (
    <Modal
      title="Sign in to do something cooler"
      centered
      visible={modalSignInVisible}
      confirmLoading={confirmLoading}
      onCancel={() => setModalSignInVisible(false)}
      onOk={() => {
        setConfirmLoading(true);
        handleSignIn(userKey, userPassword).then(data => {
          checkSignInStatus(data);
        });
      }}>
      <FormGroup>
        <Input
          value={userKey}
          onChange={e => setUserKey(e.target.value)}
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
          value={userPassword}
          onChange={e => setUserPassword(e.target.value)}
          placeholder="Enter your password"
          prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}} />}
          suffix={
            <Tooltip title="Make sure you don't share your credential data">
              <Icon type="info-circle" style={{color: 'rgba(0,0,0,.45)'}} />
            </Tooltip>
          }
        />
      </FormGroup>
    </Modal>
  );
}

const FormGroup = styled.div`
  margin-bottom: 16px;
`;

export default withRouter(SignInModal);
