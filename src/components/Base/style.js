// @flow

import styled from 'styled-components';
import {Layout} from 'antd';

import {colors} from '../../constants';

const {Header, Content, Footer} = Layout;

const StyledLayout = styled(Layout)`
  min-height: 100vh;

  background: ${colors.light};
`;

const Navbar = styled(Header)`
  background: ${colors.white};
`;

const StyledContent = styled(Content)``;

const StyledFooter = styled(Footer)``;

export {
  StyledLayout as Layout,
  Navbar,
  StyledContent as Content,
  StyledFooter as Footer,
};
