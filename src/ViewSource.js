import React from 'react'
import styled from 'styled-components'

import EntypoGithubWithCircle from 'react-entypo/lib/entypo/GithubWithCircle';

const StyledViewSource = styled.div`
  position: absolute;
  bottom: 0;
  right: 7px;
`;

const StyledViewSourceLink = styled.a`
  color: #FFF;
  font-size: 2em;
  text-decoration: none;

  &:hover {
    color: #FFB04C;
  }
`;

function ViewSource(props) {
  return (
    <StyledViewSource>
      <StyledViewSourceLink href="https://github.com/RyanMillerC/devopsmachine">
        <EntypoGithubWithCircle />
      </StyledViewSourceLink>
    </StyledViewSource>
  )
}

export default ViewSource
