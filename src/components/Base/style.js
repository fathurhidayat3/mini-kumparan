// @flow

import styled from 'styled-components';
import {Layout} from 'antd';

import {colors} from '../../constants';

const {Content, Footer} = Layout;

const StyledLayout = styled(Layout)`
  min-height: 100vh;

  background: ${colors.light};
`;

const StyledContent = styled(Content)``;

const StyledFooter = styled(Footer)``;

export {
  StyledLayout as Layout,
  StyledContent as Content,
  StyledFooter as Footer,
};
