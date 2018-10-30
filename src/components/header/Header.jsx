import React from 'react'

import './header.css'

const Header = (props) => {
  return (
    <h1 className='header'>
      {props.children}
    </h1>
  )
}

export default Header
