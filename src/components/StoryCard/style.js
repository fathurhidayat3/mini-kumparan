import styled from 'styled-components';
import {Card} from 'antd';

const StoryCardContainer = styled(Card)`
  margin-bottom: 12px;

  height: 181px;
`;

const StoryCardHeader = styled.div`
  display: flex;
  align-items: center;
`;

const StoryCardInnerBody = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;

  margin-top: 8px;

  width: 100%;
`;

const StoryCardContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StoryCardTopWrapper = styled.div`
  display: flex;
  overflow: hidden;
`;

const StoryCardBottomWrapper = styled.div`
  display: flex;
`;

export {
  StoryCardContainer,
  StoryCardHeader,
  StoryCardInnerBody,
  StoryCardContentWrapper,
  StoryCardTopWrapper,
  StoryCardBottomWrapper,
};
