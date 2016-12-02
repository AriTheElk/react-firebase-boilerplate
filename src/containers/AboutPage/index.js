import React from 'react';
import { Link } from 'react-router';
import { Row, Column } from 'hedron';

import Title from '../../components/Title';

const AboutPage = () => {
  return (
    <Row>
      <Column>
        <Title>About</Title>
        <p>Created by <a href='http://twitter.com/douglas_correa'>@garetmckinley</a></p>
        <Title>Links</Title>
        <ul>
          <li>
            <Link href='https://github.com/jsbros/react-firebase-boilerplate' activeClassName='active'>GitHub Repo</Link>
          </li>
        </ul>
      </Column>
    </Row>
  );
};

export default AboutPage;
