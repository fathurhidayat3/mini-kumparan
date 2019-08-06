// @flow

import * as React from 'react';

import FilterContext from '../../contexts/FilterContext';

import StoryDetail from './StoryDetail';

function StoryDetailContainer() {
  const {filterData, setFilterData} = React.useContext(FilterContext);

  return (
    <StoryDetail
      filterData={filterData}
      setFilterData={setFilterData}></StoryDetail>
  );
}

export default StoryDetailContainer;
