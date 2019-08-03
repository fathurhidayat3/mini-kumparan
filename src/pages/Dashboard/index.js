// @flow

import React from 'react';
import {Row, Col, List, Table, Input, Tag, Card, Button, Select} from 'antd';
import {Route, withRouter, Switch, Link} from 'react-router-dom';

import {Layout, Content} from '../../components/Base/style';
import DashboardNavbar from '../../components/DashboardNavbar';
import HeadingText from '../../components/HeadingText';
import StoryCard from '../../components/StoryCard';

const {Column, ColumnGroup} = Table;
const {Search} = Input;
const {Option} = Select;

function Dashboard(props: any) {
  const data = ['Story', 'Category'];

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      render: text => <>{text}</>,
      width: 400,
    },
    {
      title: 'Slug',
      dataIndex: 'slug',
      key: 'slug',
      width: 300,
    },
    {
      title: 'Categories',
      key: 'categories',
      dataIndex: 'categories',
      render: categories => (
        <span>
          {categories.map(category => (
            <Tag key={category}>{category.toUpperCase()}</Tag>
          ))}
        </span>
      ),
      width: 250,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      width: 150,
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <span>
          <Link to={'/story/write'}>
            <Button type={'primary'}>Preview</Button>
          </Link>
        </span>
      ),
      width: 120,
    },
  ];

  const dataSource = [
    {
      title:
        'Polisi: 103 Rumah dan 2 Masjid di Pandeglang Rusak Akibat Gempa 6,9 M',
      slug: 'ini-slugnya',
      categories: ['nice', 'developer'],
      status: 'PUBLISHED',
    },
    {
      title: 'Data BNPB: 113 Rumah Rusak Akibat Gempa 6,9 M',
      slug: 'ini-slugnya',
      categories: ['nice', 'developer'],
      status: 'PUBLISHED',
    },
    // 2019-07-28T23:22:12.684755+00:00
  ];

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

          <Col span={18} offset={1}>
            <Switch>
              <Route
                exact
                path={'/dashboard/story'}
                component={() => (
                  <div>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                      }}>
                      <div>
                        <Search
                          placeholder="input search text"
                          onSearch={value => console.log(value)}
                          style={{width: 300}}
                        />

                        <Select
                          style={{marginLeft: 16, width: 150}}
                          value={'ALL'}
                          // onChange={handleStatusChange}
                        >
                          <Option value="ALL">Status</Option>
                          <Option value="DRAFT">DRAFT</Option>
                          <Option value="PUBLISHED">PUBLISHED</Option>
                        </Select>

                        <Select
                          style={{marginLeft: 16, width: 150}}
                          value={''}
                          // onChange={handleStatusChange}
                        >
                          <Option value="">Category</Option>
                          <Option value="NEWS">NEWS</Option>
                          <Option value="POLITIK">POLITIK</Option>
                          <Option value="ENTERTAINMENT">ENTERTAINMENT</Option>
                          <Option value="OTOMOTIF">OTOMOTIF</Option>
                          <Option value="MAKANAN">MAKANAN</Option>
                          <Option value="MINUMAN">MINUMAN</Option>
                        </Select>
                      </div>

                      <Link to={'/story/write'}>
                        <Button type={'primary'}>Write Story</Button>
                      </Link>
                    </div>

                    <Card style={{marginTop: 16}} bodyStyle={{padding: '0'}}>
                      <Table
                        columns={columns}
                        dataSource={dataSource}
                        scroll={'horizontal'}
                        pagination={false}
                      />
                    </Card>
                  </div>
                )}
              />
              <Route
                exact
                path={'/dashboard/category'}
                component={() => 'category'}
              />
            </Switch>
          </Col>

          {/* <Col span={5}>
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
          </Col> */}
        </Row>
      </Content>
    </Layout>
  );
}

export default withRouter(Dashboard);
