// @flow

import * as React from 'react';
import {Button} from 'antd';

import {Layout, Navbar, Content, Footer} from '../../components/Base';

type Props = {
  handleSignIn: any,
};

function Home(props: Props) {
  const {handleSignIn} = props;
  return (
    <Layout>
      <Navbar
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <h1>Mini Kumparan</h1>
        <Button type={'primary'} onClick={handleSignIn}>
          Sign In
        </Button>
      </Navbar>
      <Content>oke brpo</Content>
      <Footer>by siapa aja</Footer>
    </Layout>
  );
}

export default Home;
