import React from 'react';
import styled, { css } from 'styled-components';

const StyledListItem = styled.li`
  background: black;
  border-radius: 5px;
  font-size: 1.25em;
  height: auto;
  margin: .25em 0;
  padding: 1.25em 0;
  width 100%;

  &:hover {
    background: #FFB04C;
    color: #fff;
  }

  /* Change backgound based on props.target */
  ${props => (props.target === 'email') && css`
    background: #666;
    color: #ddd;
  `}

  /* Change backgound based on props.target */
  ${props => (props.target === 'github') && css`
    background: #4078c0;
    color: #ddd;
  `}

  /* Change backgound based on props.target */
  ${props => (props.target === 'linkedin') && css`
    background: #0077b5;
    color: #ddd;
  `}

  /* Change backgound based on props.target */
  ${props => (props.target === 'medium') && css`
    background: #00ab6c;
    color: #ddd;
  `}

  /* Change backgound based on props.target */
  ${props => (props.target === 'resume') && css`
    background: #444;
    color: #ddd;
  `}
`;

const StyledLink = styled.a`
  text-align: center;
  text-decoration: none;
  width: 100%;
`;

function Link(props) {
  return (
    <StyledLink href={props.href}>
      <StyledListItem target={props.target}>
        {props.children}
      </StyledListItem>
    </StyledLink>
  );
}

export default Link;
