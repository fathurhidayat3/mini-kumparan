// @flow

import React from 'react';
import {Row, Col} from 'antd';

import type {baseType} from './type';

import {Layout, Content, Footer} from './style';

import Navbar from '../Navbar';
import CategoryList from '../CategoryList';

function Base(props: baseType) {
  const {children} = props;

  const data = ['News', 'Politik', 'Entertainment', 'Otomotif'];

  return (
    <Layout>
      <Navbar />

      <Content>
        <Row type={'flex'} justify={'center'}>
          <Col span={5}>
            <CategoryList data={data} />
          </Col>

          <Col span={10} offset={1}>
            {children}
          </Col>

          <Col span={5} offset={1}></Col>
        </Row>
      </Content>

      <Footer>by siapa aja</Footer>
    </Layout>
  );
}

export default Base;
