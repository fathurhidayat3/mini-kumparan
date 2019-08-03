// @flow

import React from 'react';
import {Row, Col, List} from 'antd';
import {Route, withRouter, Switch} from 'react-router-dom';

import {Layout, Content} from '../../components/Base/style';
import DashboardNavbar from '../../components/DashboardNavbar';
import HeadingText from '../../components/HeadingText';

import DashboardArticle from './DashboardArticle';
import DashboardCategory from './DashboardCategory';

function Dashboard(props: any) {
  const data = ['Story', 'Category'];

  return (
    <Layout>
      <DashboardNavbar />
      <Content>
        <Row type={'flex'} justify={'center'}>
          <Col span={4}>
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

          <Col span={18} offset={1}>
            <Switch>
              <Route
                exact
                path={'/dashboard/story'}
                component={() => <DashboardArticle />}
              />
              <Route
                exact
                path={'/dashboard/category'}
                component={() => <DashboardCategory />}
              />
            </Switch>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}

export default withRouter(Dashboard);
