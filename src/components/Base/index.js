// @flow

import React from 'react';
import {Row, Col, List} from 'antd';
import {Layout, Content, Footer} from './style';

import Navbar from '../Navbar';
import HeadingText from '../HeadingText';

function Base(props: any) {
  const {children} = props;

  const data = ['News', 'Politik', 'Entertainment', 'Otomotif'];

  return (
    <Layout>
      <Navbar />

      <Content>
        <Row type={'flex'} justify={'center'}>
          <Col span={5}>
            <List
              size="small"
              header={
                <div>
                  <HeadingText type={'h4'}>Categories</HeadingText>
                </div>
              }
              bordered
              dataSource={data}
              renderItem={item => <List.Item>{item}</List.Item>}
              style={{background: 'white'}}
            />
          </Col>

          <Col span={9} offset={1}>
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
