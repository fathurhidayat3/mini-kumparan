// @flow

import React from 'react';
import {Row, Col, List} from 'antd';
import {Route, withRouter, Switch} from 'react-router-dom';

import {Layout, Content} from '../../components/Base/style';
import Navbar from '../../components/Navbar';
import HeadingText from '../../components/HeadingText';
import Home from '../Home/Home';

function Dashboard(props: any) {
  const data = ['STORY', 'CATEGORY'];

  return (
    <Layout>
      <Navbar />
      <Content>
        <Row type={'flex'} justify={'center'} gutter={48}>
          <Col span={5}>
            <List
              size="small"
              header={
                <div>
                  <HeadingText type={'h4'}>Menu Management</HeadingText>
                </div>
              }
              bordered
              dataSource={data}
              renderItem={item => (
                <List.Item
                  style={{
                    cursor: 'pointer',
                  }}
                  onClick={() => {
                    // setFilterData({category: item.toUpperCase()});
                    props.history.push(`/dashboard/${item.toLowerCase()}`);
                  }}>
                  {item}
                </List.Item>
              )}
              style={{
                background: 'white',
                borderColor: '#e8e8e8',
                borderRadius: 2,
              }}
            />
          </Col>

          <Col span={11}>
            <Switch>
              <Route
                exact
                path={'/dashboard/story'}
                component={() => 'story'}
              />
              <Route
                exact
                path={'/dashboard/category'}
                component={() => 'category'}
              />
            </Switch>
          </Col>

          <Col span={5}></Col>
        </Row>
      </Content>
    </Layout>
  );
}

export default withRouter(Dashboard);
