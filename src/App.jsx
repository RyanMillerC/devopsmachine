import React from 'react'

import Header from 'components/header/Header'
import LinkList from 'components/link/LinkList'
import Skills from 'components/skills/Skills'
import Title from 'components/title/Title'
import ViewSource from 'components/viewSource/ViewSource'

import links from 'components/link/links'
import skillsMap from 'components/skills/skillsMap'

import './app.css'

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      links: links,
      skills: skillsMap
    }
  }

  render () {
    return (
      <div className='app'>
        <div> {/* Container to center with flex */}
          <Header>Ryan Miller</Header>
          <Title>
            Full-Stack Application Developer
          </Title>
          <Skills setTitle={this.setTitle} skills={this.state.skills} />
          <LinkList links={this.state.links} />
        </div>
        <ViewSource /> {/* Absolute positioned; exists outside container */}
      </div>
    )
  }
}

export default App
