// @flow

import * as React from 'react';
import {Input, Tag, Tooltip, Icon} from 'antd';

import useFocus from '../../utils/useFocus';

export default function CategoryForm() {
  const [tags, setTags] = React.useState([
    'News',
    'Politik',
    'Entertainment',
    'Otomotif',
    'Kuliner',
    'Olahraga',
    'Fashion',
    'Ilustrasi',
  ]);
  const [inputVisible, setInputVisible] = React.useState(false);
  const [inputValue, setInputValue] = React.useState('');
  const [tagInputRef, setTagInputFocus] = useFocus();

  const handleClose = removedTag => {
    const newTags = tags.filter(tag => tag !== removedTag);

    setTags(newTags);
  };

  const showInput = () => {
    setInputVisible(true);
  };

  const handleInputChange = e => {
    setInputValue(e.target.value);
  };

  const handleInputConfirm = () => {
    let newTags;

    if (inputValue && tags.indexOf(inputValue) === -1) {
      newTags = [...tags, inputValue];
    } else {
      newTags = tags;
    }

    setTags(newTags);
    setInputVisible(false);
    setInputValue('');
  };

  React.useLayoutEffect(() => {
    setTagInputFocus();
  }, [inputVisible]);

  return (
    <div>
      {tags &&
        tags.map((tag, index) => {
          const isLongTag = tag.length > 20;
          const tagElem = (
            <Tag
              checked={true}
              key={tag}
              closable={index > 3}
              onClose={() => handleClose(tag)}
              style={{marginBottom: 16}}>
              {isLongTag ? `${tag.slice(0, 20)}...` : tag}
            </Tag>
          );
          return isLongTag ? (
            <Tooltip title={tag} key={tag}>
              {tagElem}
            </Tooltip>
          ) : (
            tagElem
          );
        })}

      {inputVisible && (
        <Input
          ref={tagInputRef}
          type="text"
          size="small"
          style={{width: 78}}
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputConfirm}
          onPressEnter={handleInputConfirm}
        />
      )}

      {!inputVisible && (
        <Tag
          onClick={showInput}
          style={{
            background: '#fff',
            borderStyle: 'dashed',
            marginBottom: 16,
          }}>
          <Icon type="plus" /> New Tag
        </Tag>
      )}
    </div>
  );
}
