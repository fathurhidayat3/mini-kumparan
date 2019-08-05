// @flow

import styled from 'styled-components';

const CustomInputTitle = styled.input`
  width: 100%;

  background: transparent;
  border: none !important;
  outline: none !important;

  font-size: 1.5rem;
  font-weight: bold;
`;

const EditorTopToolbox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const WordCounter = styled.div`
  padding: 8px;

  background: white;
`;

export {CustomInputTitle, EditorTopToolbox, WordCounter};
