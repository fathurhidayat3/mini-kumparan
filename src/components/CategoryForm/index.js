// @flow

import * as React from 'react';
import {Tag, Tooltip} from 'antd';

const {CheckableTag} = Tag;

export default function CategoryForm(props: any) {
  const {categories, checkedCategories, setCheckedCategories} = props;

  function handleCategoryCheck(e, category) {
    checkedCategories.map(checkedItem => {
      if (checkedItem.categoryslug === category.categoryslug) {
        const newCheckedItem = checkedItem;
        newCheckedItem.isChecked = !checkedItem.isChecked;

        setCheckedCategories([...checkedCategories, {checkedItem}]);
      }
    });
  }

  React.useEffect(() => {
    setCheckedCategories(categories);
  });

  return (
    <div>
      {categories &&
        categories.map((tag, index) => {
          const isLongTag = tag.categoryname.length > 20;
          const tagElem = (
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
          );
          return isLongTag ? (
            <Tooltip title={tag.categoryname} key={tag.categoryslug}>
              {tagElem}
            </Tooltip>
          ) : (
            tagElem
          );
        })}
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
