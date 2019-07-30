import styled from 'styled-components';
import {Card} from 'antd';

const StoryCardContainer = styled(Card)`
  margin-bottom: 12px;
`;

const StoryCardInnerBody = styled.div`
  flex: 1;
  display: flex;
  width: 100%;
`;

export {StoryCardContainer, StoryCardInnerBody};
