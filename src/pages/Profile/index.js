// @flow

import React from 'react';
import {Row, Col} from 'antd';
import {withRouter} from 'react-router-dom';

import ProfileInfo from './ProfileInfo';
import ProfileContent from './ProfileContent';

import QueryGetProfileArticles from '../../graphql/User/QueryGetProfileArticles';

import CategoryContext from '../../contexts/CategoryContext';

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
      <CategoryContext.Provider value={{category, setCategory}}>
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
                  <Col span={5} />
                </Row>
              </Content>
            );
          }}
        </QueryGetProfileArticles>
      </CategoryContext.Provider>
    </Layout>
  );
}

export default withRouter(Profile);
