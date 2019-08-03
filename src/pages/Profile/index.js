// @flow

import React from 'react';
import {Row} from 'antd';

import {withRouter} from 'react-router-dom';

import ProfileInfo from './ProfileInfo';
import ProfileContent from './ProfileContent';
import ProfileCategoryBox from './ProfileCategoryBox';

import ProfileMeta from './ProfileMeta';

import AuthContext from '../../contexts/AuthContext';

import {Layout, Content} from '../../components/Base/style';
import Navbar from '../../components/Navbar';

import gql from 'graphql-tag';
import {Query} from 'react-apollo';

const query = gql`
  query QueryProfileArticles($username: String!, $category: String!) {
    ProfileArticles(username: $username, category: $category) {
      articles {
        id
        title
        body
        status
        createdAt
        thumbnail
        totalComments
        user {
          userId
        }
        user {
          userId
        }
      }
      user {
        username
        fullname
      }
    }
  }
`;

function Profile(props: any) {
  const pathname = props.history.location.pathname;
  const username = (pathname.split('/')[2] && pathname.split('/')[2]) || '';

  return (
    <Layout>
      <Navbar />

      <AuthContext.Consumer>
        {({userdata}) => (
          <Query query={query} variables={{username, category: ''}}>
            {({loading, error, data}) => {
              if (loading || error) {
                return '';
              }

              const userdata = data.ProfileArticles.user;
              const articles = data.ProfileArticles.articles;

              return (
                <Content>
                  <ProfileMeta title={userdata.fullname} pathname={'huhu'} />

                  <Row type={'flex'} justify={'center'} gutter={48}>
                    <ProfileInfo userdata={userdata} />
                    {articles && <ProfileContent articles={articles} />}
                    <ProfileCategoryBox userdata={userdata} />
                  </Row>
                </Content>
              );
            }}
          </Query>
        )}
      </AuthContext.Consumer>
    </Layout>
  );
}

export default withRouter(Profile);
