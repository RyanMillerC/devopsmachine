import React from 'react'

import Link from './Link'

import './linkList.css'

const LinkList = (props) => {
  return (
    <section>
      <ul className='linkList'>
        {
          props.links.map((link, index) => (
            <Link
              color={link.color}
              href={link.url}
              icon={link.icon}
              key={index}
              target={link.id}
            >
              {link.displayName}
            </Link>
          ))
        }
      </ul>
    </section>
  )
}

export default LinkList
