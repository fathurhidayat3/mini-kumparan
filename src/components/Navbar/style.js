// @flow

import styled from 'styled-components';
import {Layout} from 'antd';

import {colors} from '../../constants';

const {Header} = Layout;

const NavbarContainer = styled(Header)`
  display: flex;

  background: ${colors.white};
`;

const NavbarPart = styled.div`
  flex: 1;
  display: flex;
  justify-content: ${props => props.justifyContent};
`;

export {NavbarContainer, NavbarPart};
