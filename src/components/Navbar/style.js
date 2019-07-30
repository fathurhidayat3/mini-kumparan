// @flow

import styled from 'styled-components';
import {Layout} from 'antd';

import {colors} from '../../constants';

const {Header} = Layout;

const NavbarContainer = styled(Header)`
  position: fixed;
  top: 0;

  display: flex;

  width: 100%;

  background: ${colors.white};

  z-index: 10;
`;

const NavbarPart = styled.div`
  flex: 1;
  display: flex;
  justify-content: ${props => props.justifyContent};
  align-items: center;
`;

export {NavbarContainer, NavbarPart};
