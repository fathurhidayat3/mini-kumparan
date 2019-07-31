// @flow

import React from 'react';
import {withRouter, Link} from 'react-router-dom';
import styled from 'styled-components';
import dayjs from 'dayjs';
import {Card, Divider, Avatar, Tag, List} from 'antd';
import Text from 'antd/lib/typography/Text';
import {Helmet} from 'react-helmet';

import GetPublishedArticles from '../../graphql/Articles/QueryGetPublishedArticles';
import QueryGetPublishedArticleBySlug from '../../graphql/Articles/QueryGetPublishedArticleBySlug';

import FilterContext from '../../contexts/FilterContext';

import Base from '../../components/Base';
import HeadingText from '../../components/HeadingText';
import StoryCard from '../../components/StoryCard';

function StoryDetail(props: any) {
  const pathname = props.history.location.pathname;
  const slug = pathname.split('/')[2];

  return (
    <FilterContext.Consumer>
      {({filterData, setFilterData}) => {
        return (
          <Base>
            <QueryGetPublishedArticleBySlug
              query={QueryGetPublishedArticleBySlug.query}
              variables={{slug}}>
              {({loading, error, data}) => {
                if (loading) return 'Loading...';
                if (error) return `Error! ${error.message}`;

                const dataDetail = data.GetPublishedArticleBySlug;

                return (
                  <StoryPanelContainer>
                    <Helmet>
                      <meta charSet="utf-8" />
                      <meta name="description" content={dataDetail.title} />

                      <title>{dataDetail.title}</title>

                      <link
                        rel="canonical"
                        href={`http://mini-kumparan.com/${pathname}`}
                      />
                    </Helmet>

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

                    <div style={{margin: '16px 0'}}>
                      <img
                        src={dataDetail.thumbnail}
                        style={{width: '100%', borderRadius: 8}}
                      />
                    </div>

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
            </QueryGetPublishedArticleBySlug>

            <Divider />

            <div style={{marginTop: 24}}>
              <HeadingText type={'h3'}>Related Story</HeadingText>

              <div style={{marginTop: 16}}>
                <GetPublishedArticles
                  query={GetPublishedArticles.query}
                  variables={{category: filterData.category}}>
                  {({loading, error, data}) => {
                    if (loading) return 'Loading...';
                    if (error) return `Error! ${error.message}`;

                    return (
                      <List
                        itemLayout="vertical"
                        size="large"
                        dataSource={data.GetPublishedArticlesByCategory}
                        // data.GetPublishedArticles
                        renderItem={item => (
                          <Link to={`/story/${item.slug}`}>
                            <StoryCard {...item} />
                          </Link>
                        )}
                      />
                    );
                  }}
                </GetPublishedArticles>
              </div>
            </div>
          </Base>
        );
      }}
    </FilterContext.Consumer>
  );
}

const StoryPanelContainer = styled(Card)``;

export default withRouter(StoryDetail);
