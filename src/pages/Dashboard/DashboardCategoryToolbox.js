// @flow

import React from 'react';
import {Button, Modal, Input, Icon} from 'antd';
import styled from 'styled-components';
import AuthContext from '../../contexts/AuthContext';

import MutationCreateUserCategory from '../../graphql/Category/MutationCreateUserCategory';
import QueryDashboardCategories from '../../graphql/Category/QueryDashboardCategories';

export default function DashboardCategoryToolbox() {
  const {userdata} = React.useContext(AuthContext);

  const [
    modalCreateCategoryVisible,
    setModalCreateCategoryVisible,
  ] = React.useState(false);
  const [categoryname, setCategoryname]: any = React.useState('');
  const [categoryslug, setCategoryslug]: any = React.useState('');

  const [confirmLoading, setConfirmLoading]: any = React.useState(false);

  function handleCategoryNameChange(e, userdata) {
    const value = e.target.value;

    setCategoryname(value.toUpperCase());
    setCategoryslug(`${userdata.userdata.username}-${value}`.toUpperCase());
  }

  return (
    <MutationCreateUserCategory
      mutation={MutationCreateUserCategory.mutation}
      variables={{
        username: userdata.userdata.username,
        categoryname,
        categoryslug,
      }}
      refetchQueries={[
        {
          query: QueryDashboardCategories.query,
          variables: {username: userdata.userdata.username},
        },
      ]}
      onCompleted={() => {
        setConfirmLoading(true);
        setModalCreateCategoryVisible(false);
        setConfirmLoading(false);
      }}
      onError={() => {
        Modal.error({
          title: 'Create Category Failed',
          content: 'Category already exists',
          okText: 'OK',
        });

        setConfirmLoading(false);
      }}>
      {CreateUserCategory => {
        return (
          <>
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
              }}>
              <Button
                type={'primary'}
                onClick={() => {
                  setModalCreateCategoryVisible(true);
                }}>
                Add Category
              </Button>
            </div>

            <Modal
              title={'Add category'}
              centered
              visible={modalCreateCategoryVisible}
              confirmLoading={confirmLoading}
              onCancel={() => setModalCreateCategoryVisible(false)}
              onOk={() => {
                setConfirmLoading(true);
                CreateUserCategory();
              }}>
              <FormGroup>
                <Input
                  value={categoryname}
                  onChange={e => handleCategoryNameChange(e, userdata)}
                  placeholder="Enter your custom category name"
                  prefix={
                    <Icon type="edit" style={{color: 'rgba(0,0,0,.25)'}} />
                  }
                />
              </FormGroup>
            </Modal>
          </>
        );
      }}
    </MutationCreateUserCategory>
  );
}

const FormGroup = styled.div`
  margin-bottom: 16px;
`;
