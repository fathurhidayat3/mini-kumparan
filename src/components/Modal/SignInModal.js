// @flow

import * as React from 'react';
import {Modal, Input, Tooltip, Icon} from 'antd';
import styled from 'styled-components';

import handleSignIn from '../../utils/handleSignIn';

function SignInModal(props: any) {
  const {modalSignInVisible, setModalSignInVisible} = props;

  const [userKey, setUserKey]: any = React.useState('');
  const [userPassword, setUserPassword]: any = React.useState('');

  return (
    <Modal
      title="Sign in to do something cooler"
      centered
      visible={modalSignInVisible}
      onCancel={() => setModalSignInVisible(false)}
      onOk={() =>
        handleSignIn(userKey, userPassword).then(data => console.log(data))
      }>
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

export default SignInModal;
