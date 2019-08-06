// @flow

import * as React from 'react';
import {Tag} from 'antd';

const {CheckableTag} = Tag;

type Props = {
  categories: Array<Object>,
  checkedCategories: Array<Object>,
  setCheckedCategories: Function,
};

export default function CategoryForm(props: Props) {
  const {categories, checkedCategories, setCheckedCategories} = props;

  function handleCategoryCheck(e, category) {
    checkedCategories.map(checkedItem => {
      if (checkedItem.categoryslug === category.categoryslug) {
        const newCheckedItem = checkedItem;
        newCheckedItem.isChecked = !checkedItem.isChecked;

        setCheckedCategories([...checkedCategories, {checkedItem}]);
      }
      return null;
    });
  }

  React.useEffect(() => {
    const newData = [...checkedCategories, ...categories];
    setCheckedCategories(newData);
  }, [categories]);

  return (
    <div>
      {checkedCategories &&
        checkedCategories.map((tag, index) => (
          <CategoryTag
            checked={
              checkedCategories &&
              checkedCategories[index] &&
              checkedCategories[index].categoryslug === tag.categoryslug &&
              checkedCategories[index].isChecked
            }
            onChange={e => handleCategoryCheck(e, tag)}
            key={index}>
            {tag.categoryname}
          </CategoryTag>
        ))}
    </div>
  );
}

function CategoryTag(props: any) {
  const {children, checked, onChange, ...otherProps} = props;

  return (
    <CheckableTag
      checked={checked}
      onChange={onChange}
      style={{marginBottom: 16}}
      {...otherProps}>
      {children}
    </CheckableTag>
  );
}
