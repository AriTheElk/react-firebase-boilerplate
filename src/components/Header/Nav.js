import emojione from 'emojione';
import React, { PropTypes } from 'react';
import ReactTooltip from 'react-tooltip';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, IndexLink } from 'react-router';
import { Row, Column } from 'hedron';

import Button from '../Button';
import J from '../J';
import LoginLink from './LoginLink';
import LogoutLink from './LogoutLink';
import Nav from '../Nav';

const PageHeader = styled.section`
  text-align: center;
`;

const svg = styled.img`
  width: 250px;
`;

const Navigation = ({ signIn, signOut, auth, user }) => {
  let loginLogoutLink = auth.isLogged
    ? <LogoutLink signOut={signOut} />
    : <LoginLink action={signIn} />;
  return (
    <Nav>
      <IndexLink to='/' activeClassName='active'>
        <Button tooltip='Home' activeClassName='active'><J id='smiley_cat' s={18}/></Button>
      </IndexLink>
      <Link to='/about' activeClassName='active'>
        <Button tooltip='About' activeClassName='active'><J id='question' s={18}/></Button>
      </Link>
      <Link to='/protected' activeClassName='active'>
        <Button tooltip='Account' activeClassName='active'><J id='lock' s={18}/></Button>
      </Link>
      {loginLogoutLink}
    </Nav>
  );
};

Navigation.propTypes = {
  auth: React.PropTypes.object.isRequired,
  signIn: React.PropTypes.func.isRequired,
  signOut: React.PropTypes.func.isRequired,
  user: React.PropTypes.object.isRequired,
};

export default Navigation;
