// @flow

import * as React from 'react';

type Props = {
  filterData: Object,
  setFilterData: Function,
};

const FilterContext = React.createContext<Props>({
  filterData: {
    category: '',
    keyword: '',
  },
  setFilterData: () => {},
});

export default FilterContext;
