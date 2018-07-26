import React from 'react';
import styled from 'styled-components';

const StyledLinkList = styled.ul`
  list-style: none;
  margin: auto;
  padding: 0;
  text-align: center;
  width: 70%;
`;

function LinkList(props) {
  return (
    <section>
      <StyledLinkList>
        {props.children}
      </StyledLinkList>
    </section>
  );
}

export default LinkList;
