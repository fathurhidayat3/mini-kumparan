import React from 'react';

const FilterContext = React.createContext({
  filterData: {
    category: '',
    keyword: '',
  },
  setFilterData: () => {},
});

export default FilterContext;
