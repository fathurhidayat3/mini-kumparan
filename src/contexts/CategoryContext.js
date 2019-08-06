// @flow

import * as React from 'react';

type Props = {
  category: string,
  setCategory: Function,
};

const CategoryContext = React.createContext<Props>({
  category: '',
  setCategory: () => {},
});

export default CategoryContext;
