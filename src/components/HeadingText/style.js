import styled from 'styled-components';

import {colors} from '../../constants';

const HeadingBase = styled.p`
  font-family: 'Rubik', sans-serif;
  font-weight: bold;
  color: ${colors.dark};
`;

const HeadingTextH1 = styled(HeadingBase)`
  margin: 8px 0 0 0;

  font-size: 2em;
`;

const HeadingTextH2 = styled(HeadingBase)`
  margin: 6px 0 0 0;

  font-size: 1.5em;
`;

const HeadingTextH3 = styled(HeadingBase)`
  margin: 4px 0 0 0;

  font-size: 1.17rem;
`;

const HeadingTextH4 = styled(HeadingBase)`
  margin: 3px 0 0 0;

  font-size: 1rem;
`;

const HeadingTextH5 = styled(HeadingBase)`
  margin: 2px 0 0 0;

  font-size: 0.83rem;
`;

export {
  HeadingTextH1,
  HeadingTextH2,
  HeadingTextH3,
  HeadingTextH4,
  HeadingTextH5,
};
