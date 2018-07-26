import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h2`
  color: #4CC2FF;
  font-family: 'Roboto', serif;
  font-size: 2em;
  margin: .1em auto 1em;
  text-align: center;
`;

function Title(props) {
  return <StyledTitle>{props.children}</StyledTitle>;
}

export default Title;
