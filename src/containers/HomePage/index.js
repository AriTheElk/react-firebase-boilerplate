import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';
import { Row, Column } from 'hedron';

import J from '../../components/J';
import Title from '../../components/Title';

const HomePage = () => {
  return (
    <Row>
      <Column>
        <Title>Welcome to the React Firebase Boilerplate!</Title>
        <p>Time to start putting in your own content</p>
      </Column>
    </Row>
  );
};

export default HomePage;
