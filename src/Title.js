import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h2`
  color: #4CC2FF;
  font-family: 'Montserrat', serif;
  font-size: 1.5em;
  margin: .1em auto 1.25em;
  text-align: center;
`;

function Title(props) {
  return <StyledTitle>{props.children}</StyledTitle>;
}

export default Title;
