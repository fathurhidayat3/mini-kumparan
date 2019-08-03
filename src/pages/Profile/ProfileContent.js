// @flow

import React from 'react';
import {Tabs, Col} from 'antd';

import styled from 'styled-components';

import ArticleList from '../Home/ArticleList';

const {TabPane} = Tabs;

function ProfileContent(props: any) {
  const {articles} = props;

  const [didMount, setDidMount] = React.useState(false);

  React.useEffect(() => {
    setDidMount(true);
    return () => setDidMount(false);
  }, []);

  if (!didMount) {
    return null;
  }

  return (
    <ProfileContentContainer span={11}>
      <Tabs defaultActiveKey="1">
        <TabPane tab={'Articles'} key="1">
          {/* {[0, 1, 2, 3].map((item, index) => (
            <Card style={{marginBottom: 16}} key={index}>
              <Skeleton avatar paragraph={{rows: 2}} loading={true} active />
            </Card>
          ))} */}

          <ArticleList data={articles} />
        </TabPane>
      </Tabs>
    </ProfileContentContainer>
  );
}

const ProfileContentContainer = styled(Col)`
  margin-bottom: 16px;
`;

export default ProfileContent;
