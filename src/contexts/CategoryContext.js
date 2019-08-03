import React from 'react';

const CategoryContext = React.createContext({
  category: '',
  setCategory: () => {},
});

export default CategoryContext;
