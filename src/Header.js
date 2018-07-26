import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.h1`
  color: #fff;
  font-family: 'Roboto Slab', serif;
  font-size: 3em;
  margin: 0 auto;
  text-align: center;
`;

function Header(props) {
  return <StyledHeader>{props.children}</StyledHeader>;
}

export default Header;
