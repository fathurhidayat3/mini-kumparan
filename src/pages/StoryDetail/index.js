// @flow

import * as React from 'react';

import FilterContext from '../../contexts/FilterContext';

import StoryDetail from './StoryDetail';

function StoryDetailContainer() {
  return (
    <FilterContext.Consumer>
      {({filterData, setFilterData}) => (
        <StoryDetail
          filterData={filterData}
          setFilterData={setFilterData}></StoryDetail>
      )}
    </FilterContext.Consumer>
  );
}

export default StoryDetailContainer;
