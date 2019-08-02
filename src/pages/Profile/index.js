// @flow

import React from 'react';
import {Row, Col} from 'antd';

import ProfileInfo from './ProfileInfo';
import ProfileContent from './ProfileContent';

import ProfileMeta from './ProfileMeta';

import {Layout, Content} from '../../components/Base/style';
import Navbar from '../../components/Navbar';

function Profile() {
  return (
    <Layout>
      <Navbar />

      <Content>
        <ProfileMeta title={'Bambang Setyanto'} pathname={'huhu'} />

        <Row type={'flex'} justify={'center'} gutter={48}>
          <ProfileInfo />

          <ProfileContent />

          <Col span={5}></Col>
        </Row>
      </Content>
    </Layout>
  );
}

export default Profile;
