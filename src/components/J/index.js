import emojione from 'emojione';
import React from 'react';
import styled from 'styled-components';

const Emoji = styled.img`
  width: ${props => props.s ? props.s : 22}px;
`;

const J = ({ id, s }) => {
  const shortname = `:${id}:`;
  const unicode = emojione.emojioneList[shortname].unicode;
  return <Emoji src={`//cdn.jsdelivr.net/emojione/assets/png/${unicode}.png`} s={s} />;
};

J.propTypes = {
  id: React.PropTypes.string,
  s: React.PropTypes.number,
};

export default J;