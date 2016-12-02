import React from 'react';
import { Link } from 'react-router';
import { Row, Column } from 'hedron';

import checkAuth from '../../components/requireAuth';
import Title from '../../components/Title';

const AccountPage = () => {
  return (
    <Row>
      <Column>
        <Title>You will only see this page if you are logged in</Title>
        <p>GitHub Token: CLICK TO SHOW</p>
      </Column>
    </Row>
  );
};

export default checkAuth(AccountPage);
