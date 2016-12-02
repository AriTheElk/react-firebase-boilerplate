import React from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';
import Button from '../Button';

const LoginLink = (props) => {
  return (
    <span>
      <Button onClick={props.action}><FontAwesome name='github' /> Login</Button>
    </span>
  );
};

LoginLink.propTypes = {
  action: React.PropTypes.func.isRequired,
};

export default LoginLink;
