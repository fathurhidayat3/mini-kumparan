// @flow

import React from 'react';
import {withRouter, Link} from 'react-router-dom';
import {Query} from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import dayjs from 'dayjs';
import {Card, Divider, Avatar, Tag} from 'antd';

import FilterContext from '../../contexts/FilterContext';

import Base from '../../components/Base';
import HeadingText from '../../components/HeadingText';
import Text from 'antd/lib/typography/Text';

const GET_PUBLISHED_ARTICLE_BY_SLUG = gql`
  query QueryGetPublishedArticleBySlug($slug: String!) {
    GetPublishedArticleBySlug(slug: $slug) {
      id
      title
      slug
      body
      thumbnail
      status
      createdAt
      updatedAt
      categories
      user {
        fullName
      }
    }
  }
`;

function StoryDetail(props: any) {
  const slug = props.history.location.pathname.split('/')[2];

  return (
    <FilterContext.Consumer>
      {({filterData, setFilterData}) => {
        return (
          <Base>
            <Query query={GET_PUBLISHED_ARTICLE_BY_SLUG} variables={{slug}}>
              {({loading, error, data}) => {
                if (loading) return 'Loading...';
                if (error) return `Error! ${error.message}`;

                const dataDetail = data.GetPublishedArticleBySlug;

                return (
                  <StoryPanelContainer>
                    <div>
                      <HeadingText type={'h1'}>{dataDetail.title}</HeadingText>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          marginTop: 8,
                        }}>
                        <Avatar size={32} icon={'user'} />

                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            margin: '0 8px',
                          }}>
                          <HeadingText type={'h4'}>
                            {dataDetail.user.fullName}
                          </HeadingText>

                          <Text>{`Published at : ${dayjs(
                            dataDetail.createdAt
                          ).format('DD/MM/YYYY HH:mm')}`}</Text>
                        </div>
                      </div>
                    </div>

                    <Divider />

                    <div>
                      <Text>{dataDetail.body}</Text>
                    </div>

                    <Divider />

                    <div>
                      {dataDetail.categories.map((categoriItem: any) => {
                        return (
                          <Link to={'/'} key={categoriItem}>
                            <Tag
                              onClick={() =>
                                setFilterData({category: categoriItem})
                              }>
                              {categoriItem}
                            </Tag>
                          </Link>
                        );
                      })}
                    </div>
                  </StoryPanelContainer>
                );
              }}
            </Query>
          </Base>
        );
      }}
    </FilterContext.Consumer>
  );
}

const StoryPanelContainer = styled(Card)``;

export default withRouter(StoryDetail);
