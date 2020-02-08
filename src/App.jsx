import React from 'react';

import Header from 'components/header/Header';
import LinkList from 'components/link/LinkList';
import Skills from 'components/skills/Skills';
import Title from 'components/title/Title';
import ViewSource from 'components/viewSource/ViewSource';

import links from 'components/link/links';
import skills from 'components/skills/skillsMap';

import './app.css';

const App = () => {
  return (
    <div className='app'>
      <div> {/* Container to center with flex */}
        <Header>Ryan Miller</Header>
        <Title>
          Subject Matter Expert (DevSecOps)
        </Title>
        <Skills skills={skills} />
        <LinkList links={links} />
      </div>
      <ViewSource /> {/* Absolute positioned; exists outside container */}
    </div>
  );
}

export default App;
