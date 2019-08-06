// @flow

import * as React from 'react';
import {Modal, Input, Tooltip, Icon} from 'antd';
import styled from 'styled-components';
import {withRouter} from 'react-router-dom';

import AuthContext from '../../contexts/AuthContext';

import handleRegister from '../../utils/handleRegister';

type Props = {
  modalRegisterVisible: boolean,
  setModalRegisterVisible: Function,
};

function RegisterModal(props: Props) {
  const {modalRegisterVisible, setModalRegisterVisible} = props;

  const {setUserdata} = React.useContext(AuthContext);

  const [fullname, setFullname]: any = React.useState('');
  const [username, setUsername]: any = React.useState('');
  const [email, setEmail]: any = React.useState('');
  const [password, setPassword]: any = React.useState('');

  const [confirmLoading, setConfirmLoading]: any = React.useState(false);

  function successRegisterModal() {
    Modal.success({
      title: 'Register Success',
      content: 'Now you able to create story, and many more',
      okText: 'OK, got it',
    });
  }

  function errorRegisterModal(message) {
    Modal.error({
      title: 'Register Failed',
      content: message,
      okText: 'OK, got it',
    });
  }

  function checkRegisterStatus(data, setUserdata) {
    setConfirmLoading(false);

    if (data && data.token) {
      setModalRegisterVisible(false);

      successRegisterModal();

      localStorage.setItem('user-data', JSON.stringify(data));

      setUserdata(data);
    } else {
      errorRegisterModal(data.error.message);
    }
  }

  return (
    <Modal
      title="Register for your own account"
      centered
      visible={modalRegisterVisible}
      confirmLoading={confirmLoading}
      onCancel={() => setModalRegisterVisible(false)}
      onOk={() => {
        setConfirmLoading(true);

        handleRegister(fullname, username, email, password).then(async data => {
          checkRegisterStatus(data, setUserdata);
        });
      }}>
      <FormGroup>
        <Input
          value={fullname}
          onChange={e => setFullname(e.target.value)}
          placeholder="Fill in your full name"
          prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}} />}
          suffix={
            <Tooltip title="Fill in your full name">
              <Icon type="info-circle" style={{color: 'rgba(0,0,0,.45)'}} />
            </Tooltip>
          }
        />
      </FormGroup>

      <FormGroup>
        <Input
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder="Enter your username"
          prefix={<Icon type="ant-design" style={{color: 'rgba(0,0,0,.25)'}} />}
          suffix={
            <Tooltip title="You can use either username">
              <Icon type="info-circle" style={{color: 'rgba(0,0,0,.45)'}} />
            </Tooltip>
          }
        />
      </FormGroup>

      <FormGroup>
        <Input
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Enter your active email"
          prefix={<Icon type="mail" style={{color: 'rgba(0,0,0,.25)'}} />}
          suffix={
            <Tooltip title="Make sure you enter a valid and active email">
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
    </Modal>
  );
}

const FormGroup = styled.div`
  margin-bottom: 16px;
`;

export default withRouter(RegisterModal);
