import React from 'react';
import Button from '../Button';

const LogoutLink = ({ signOut }) => {
  return <Button href='#' onClick={signOut}>Logout</Button>;
};

LogoutLink.propTypes = {
  signOut: React.PropTypes.func.isRequired
};

export default LogoutLink;
