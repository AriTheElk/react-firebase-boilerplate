import React from 'react';
import styled from 'styled-components';
import { Link, browserHistory } from 'react-router';

const Wrapper = styled.span`
  display: inline-block;
  position: relative;
  overflow: hidden;
`;

const StyledButton = styled.button`
  padding: 4px 8px;
  background: transparent;
  border: 1px solid deepskyblue;
  border-radius: 3px;
  color: deepskyblue;
  font-size: 22px;
  font-weight: 200;
  letter-spacing: 1px;
  &::before {
    content: '${props => props.children}';
    position: absolute;
    margin-top: -50px;
  }
  &:hover{
    background: deepskyblue;
    color: white;
  }
  &:focus {
    outline: 2px solid deepskyblue;
  }
`;

function Button({ to, ...props }) {
  function navigate() {
    browserHistory.push(to);
  }
  return (
    <Wrapper>
      <StyledButton onClick={navigate} { ...props } />
    </Wrapper>
  );
}

Button.propTypes = {
  to: React.PropTypes.string,
};

export default Button;
