// @flow

import React from 'react';

import {List} from 'antd';
import {withRouter} from 'react-router-dom';

import FilterContext from '../../contexts/FilterContext';

import HeadingText from '../HeadingText';

function CategoryList(props: any) {
  const {data} = props;

  return (
    <FilterContext.Consumer>
      {({setFilterData}) => {
        return (
          <List
            size="small"
            header={
              <div>
                <HeadingText type={'h4'}>Categories</HeadingText>
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
                  setFilterData({category: item.toUpperCase(), keyword: ''});
                  props.history.push(`/category/${item.toLowerCase()}`);
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
        );
      }}
    </FilterContext.Consumer>
  );
}

export default withRouter(CategoryList);
