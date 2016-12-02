import React from 'react';
import ReactTooltip from 'react-tooltip';
import styled from 'styled-components';
import uuid from 'node-uuid';
import { IndexLink, Link, browserHistory } from 'react-router';

const StyledButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 1px solid dodgerblue;
  color: dodgerblue;
  cursor: pointer;
  font-size: 22px;
  font-weight: 200;
  height: 40px;
  letter-spacing: 1px;
  overflow: hidden;
  padding: 0 8px;
  position: relative;
  transition: all .15s linear;
  .active & {
    background-color: dodgerblue;
    color: white;
  }
  &::before {
    background-color: rgba(0, 0, 0, .0);
    content: ' ';
    height: 0;
    left: 0;
    position: absolute;
    top: 50%;
    transition: all .3s ease-in;
    width: 100%;
  }
  &:hover{
    background: dodgerblue;
    color: white;
    &::before {
      background-color: rgba(0, 0, 0, .075);
      top: 0;
      display: block;
      height: 100%;
    }
  }
  &:active {
    background: dodgerblue;
    color: white;
    &::before {
      background-color: rgba(0, 0, 0, .15);
    }
  }
  &:focus {
    outline: 2px solid dodgerblue;
  }
`;

function Button({ to, tooltip, ...props }) {
  const output = [];
  const id = uuid.v4();
  if (typeof tooltip !== 'undefined') {
    return (
      <span>
        <StyledButton data-tip data-for={id} { ...props } />
        <ReactTooltip place='bottom' type='dark' effect='solid' id={id}>
          {tooltip}
        </ReactTooltip>
      </span>
    );
  }
  return (
      <span>
        <StyledButton { ...props } />
      </span>
    );
}

Button.propTypes = {
  to: React.PropTypes.string,
  tooltip: React.PropTypes.string,
};

export default Button;
