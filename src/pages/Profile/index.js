// @flow

import React from 'react';
import {Row} from 'antd';
import {withRouter} from 'react-router-dom';

import ProfileInfo from './ProfileInfo';
import ProfileContent from './ProfileContent';
import ProfileCategoryBox from './ProfileCategoryBox';

import QueryGetProfileArticles from '../../graphql/User/QueryGetProfileArticles';

import ProfileMeta from './ProfileMeta';

import {Layout, Content} from '../../components/Base/style';
import Navbar from '../../components/Navbar';

function Profile(props: any) {
  const pathname = props.history.location.pathname;
  const username = (pathname.split('/')[2] && pathname.split('/')[2]) || '';

  const [category, setCategory] = React.useState('');

  return (
    <Layout>
      <Navbar />

      <QueryGetProfileArticles
        query={QueryGetProfileArticles.query}
        variables={{username, category}}>
        {({loading, error, data}) => {
          if (loading || error) {
            return '';
          }

          const dataProfile = data.ProfileArticles;
          const {user: userdata, articles} = dataProfile;

          return (
            <Content>
              <ProfileMeta
                title={userdata.fullname}
                pathname={`/profile/${userdata.username}`}
              />

              <Row type={'flex'} justify={'center'} gutter={48}>
                <ProfileInfo userdata={userdata} />
                {articles && <ProfileContent articles={articles} />}
                <ProfileCategoryBox
                  userdata={userdata}
                  setCategory={setCategory}
                />
              </Row>
            </Content>
          );
        }}
      </QueryGetProfileArticles>
    </Layout>
  );
}

export default withRouter(Profile);
