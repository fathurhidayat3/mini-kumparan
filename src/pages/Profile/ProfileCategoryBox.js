// @flow

import React from 'react';
import {Modal, Input, Tooltip, Icon, Button, Tag, Divider} from 'antd';
import styled from 'styled-components';

import CategoryContext from '../../contexts/CategoryContext';

import QueryGetUserCategoriesByUsername from '../../graphql/User/QueryGetUserCategoriesByUsername';

import HeadingText from '../../components/HeadingText';

const {Search} = Input;

export default function ProfileCategoryBox(props: any) {
  const {userdata} = props;
  const {category, setCategory} = React.useContext(CategoryContext);

  const [modalCategoriesVisible, setModalCategoriesVisible] = React.useState(
    false
  );
  const [confirmLoading, setConfirmLoading] = React.useState(false);

  const defaultCategories = ['News', 'Politik', 'Entertainment', 'Otomotif'];

  function mapCategories(userCategories) {
    return userCategories.map(categoryItem => (
      <CustomTag
        onClick={() => setCategory(categoryItem && categoryItem.categoryslug)}
        key={categoryItem && categoryItem.categoryslug}>
        {categoryItem &&
          categoryItem.categoryname &&
          categoryItem.categoryname.toUpperCase()}
      </CustomTag>
    ));
  }

  return (
    <>
      <HeadingText type={'h4'}>Categories</HeadingText>

      <QueryGetUserCategoriesByUsername
        query={QueryGetUserCategoriesByUsername.query}
        variables={{username: userdata.username}}>
        {({loading, error, data}) => {
          const userCategories =
            (data && data.GetUserCategoriesByUsername) || [];

          return loading && userCategories ? (
            ''
          ) : (
            <>
              <CategoryContainer>
                {defaultCategories.map(categoryDefaultItem => (
                  <CustomTag
                    onClick={() =>
                      setCategory(categoryDefaultItem.toUpperCase())
                    }
                    key={categoryDefaultItem}>
                    {categoryDefaultItem.toUpperCase()}
                  </CustomTag>
                ))}

                {userCategories && userCategories.length >= 5 ? (
                  <>
                    {mapCategories(userCategories)}
                    <CustomTagMore onClick={setModalCategoriesVisible}>
                      VIEW MORE+
                    </CustomTagMore>
                  </>
                ) : (
                  mapCategories(userCategories)
                )}
              </CategoryContainer>

              <Modal
                title={`Category by ${userdata.username}`}
                centered
                maskClosable={false}
                footer={null}
                visible={modalCategoriesVisible}
                confirmLoading={confirmLoading}
                onCancel={() => setModalCategoriesVisible(false)}>
                <Search placeholder="search category" />

                <Divider />

                <div style={{height: 70, overflowY: 'auto'}}>
                  {mapCategories(userCategories)}
                </div>
              </Modal>
            </>
          );
        }}
      </QueryGetUserCategoriesByUsername>
    </>
  );
}

const CategoryContainer = styled.div`
  margin-top: 24px;
`;

const CustomTag = styled(Tag)`
  margin-bottom: 16px;
`;

const CustomTagMore = styled(CustomTag)`
  margin-bottom: 16px;
  background: transparent;
  border: none;
`;
