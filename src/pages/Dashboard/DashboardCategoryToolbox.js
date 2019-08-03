// @flow

import React from 'react';
import {Input, Button} from 'antd';

export default function DashboardCategoryToolbox(props: any) {
  const {handleFilterSubmit} = props;

  const [tempKeyword, setTempKeyword] = React.useState('');

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}>
      <div>
        <Input
          value={tempKeyword}
          placeholder="input search text"
          onChange={e => setTempKeyword(e.target.value)}
          style={{width: 300}}
        />

        <Button
          type={'primary'}
          style={{marginLeft: 16}}
          onClick={() => handleFilterSubmit(tempKeyword)}>
          Apply Filter
        </Button>
      </div>

      <Button type={'primary'}>Add Category</Button>
    </div>
  );
}
