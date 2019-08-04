// @flow

import React from 'react';
import {Link} from 'react-router-dom';
import {Tag} from 'antd';

import {StoryDetailCategoriesContainer} from './style';

function StoryDetailCategories(props: any) {
  const {dataDetail, setFilterData} = props;

  return (
    <StoryDetailCategoriesContainer>
      {dataDetail.categories.map((categoriItem: any) => (
        <Link to={`/category/${categoriItem.toLowerCase()}`} key={categoriItem}>
          <Tag
            onClick={() =>
              setFilterData({category: categoriItem.toUpperCase(), keyword: ''})
            }>
            {categoriItem.includes('-')
              ? categoriItem.split('-')[1]
              : categoriItem}
          </Tag>
        </Link>
      ))}
    </StoryDetailCategoriesContainer>
  );
}

export default StoryDetailCategories;
