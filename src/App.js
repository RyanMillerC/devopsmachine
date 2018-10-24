import React from 'react';
import styled from 'styled-components';

/* Social Icons */
import EntypoDocument from 'react-entypo/lib/entypo/Document';
import EntypoEmail from 'react-entypo/lib/entypo/Email';
import EntypoGithub from 'react-entypo/lib/entypo/Github';
import EntypoLinkedin from 'react-entypo/lib/entypo/Linkedin';
import EntypoMedium from 'react-entypo/lib/entypo/Medium';

import Header from './Header';
import Link from './Link';
import LinkList from './LinkList';
import SkillsBar from './SkillsBar';
import Title from './Title';
import ViewSource from './ViewSource';

const StyledApp = styled.div`
  align-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  margin: auto;
  max-width: 500px;
  width: 80%;
`;

class App extends React.Component {
  render() {
    return (
      <StyledApp>
        <div> {/* Container to center with flex */}
          <Header>Ryan Miller</Header>
          <Title>Application Engineer</Title>
          <SkillsBar />
          <LinkList>
            <Link target="resume" href="https://drive.google.com/open?id=1WegOIdgeuSCvw1b82LsLyn7-RGbIIHQZ">
              <EntypoDocument /> Resume
            </Link>
            <Link target="email" href="mailto:miller.christopher.ryan@gmail.com">
              <EntypoEmail /> Email
            </Link>
            <Link target="github" href="http://github.com/RyanMillerC">
              <EntypoGithub /> Github
            </Link>
            <Link target="linkedin" href="http://www.linkedin.com/in/millerryanc">
              <EntypoLinkedin /> LinkedIn
            </Link>
            <Link target="medium" href="https://medium.com/@ryanmillerc">
              <EntypoMedium /> Medium
            </Link>
          </LinkList>
        </div>
        <ViewSource /> {/* Absolute positioned; exists outside container */}
      </StyledApp>
    );
  }
}

export default App;
