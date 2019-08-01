// @flow

import styled from 'styled-components';
import {Card, Avatar} from 'antd';

const StoryDetailContainer = styled(Card)``;

const StoryDetailHeaderContainer = styled.div``;

const StoryDetailHeaderInfoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
`;

const StoryDetailHeaderUserContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 8px;
`;

const StoryImageThumbnail = styled(Avatar)`
  margin: 16px 0;
  height: auto;
  width: 100%;
  object-fit: contain;
`;

const StoryDetailBodyContainer = styled.div``;

const StoryDetailCategoriesContainer = styled.div``;

export {
  StoryDetailContainer,
  StoryDetailHeaderContainer,
  StoryDetailHeaderInfoContainer,
  StoryDetailHeaderUserContainer,
  StoryImageThumbnail,
  StoryDetailBodyContainer,
  StoryDetailCategoriesContainer,
};
