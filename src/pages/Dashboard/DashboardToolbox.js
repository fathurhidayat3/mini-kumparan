// @flow

import React from 'react';
import {Input, Button, Select} from 'antd';
import {Link} from 'react-router-dom';

const {Option} = Select;

export default function DashboardToolbox(props: any) {
  const {handleFilterSubmit} = props;

  const [tempStatus, setTempStatus] = React.useState('ALL');
  const [tempKeyword, setTempKeyword] = React.useState('');
  const [tempCategory, setTempCategory] = React.useState('');

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

        <Select
          style={{marginLeft: 16, width: 150}}
          value={tempStatus}
          onChange={setTempStatus}>
          <Option value="ALL">Status</Option>
          <Option value="DRAFT">DRAFT</Option>
          <Option value="PUBLISHED">PUBLISHED</Option>
        </Select>

        <Select
          style={{marginLeft: 16, width: 150}}
          value={tempCategory}
          onChange={setTempCategory}>
          <Option value="">Category</Option>
          <Option value="NEWS">NEWS</Option>
          <Option value="POLITIK">POLITIK</Option>
          <Option value="ENTERTAINMENT">ENTERTAINMENT</Option>
          <Option value="OTOMOTIF">OTOMOTIF</Option>
          <Option value="MAKANAN">MAKANAN</Option>
          <Option value="MINUMAN">MINUMAN</Option>
        </Select>

        <Button
          type={'primary'}
          style={{marginLeft: 16}}
          onClick={() =>
            handleFilterSubmit(tempStatus, tempKeyword, tempCategory)
          }>
          Apply Filter
        </Button>
      </div>

      <Link to={'/story/write'}>
        <Button type={'primary'}>Write Story</Button>
      </Link>
    </div>
  );
}
