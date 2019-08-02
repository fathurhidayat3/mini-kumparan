// @flow

import React from 'react';
import {List} from 'antd';
import {Link, withRouter} from 'react-router-dom';

import StoryCard from '../../components/StoryCard';

function ArticleList(props: any) {
  const {data} = props;

  return (
    <List
      itemLayout="vertical"
      size="large"
      dataSource={data}
      renderItem={item => (
        <Link to={`/story/${item.slug}`}>
          <StoryCard {...item} />
        </Link>
      )}
    />
  );
}

export default withRouter(ArticleList);
