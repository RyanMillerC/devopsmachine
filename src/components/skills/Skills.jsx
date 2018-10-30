import React from 'react'

import './skills.css'

const Skills = (props) => {
  return (
    <div className='skillsList'>
      {
        props.skills.map((skill) => (
          <a
            className='skillsListLink'
            href={skill.url}
            rel={skill.displayName}
            key={skill.id}
          >
            <i className={skill.icon} />
          </a>
        ))
      }
    </div>
  )
}

export default Skills
