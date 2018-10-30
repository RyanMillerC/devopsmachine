import React from 'react'

import EntypoDocument from 'react-entypo/lib/entypo/Document'
import EntypoEmail from 'react-entypo/lib/entypo/Email'
import EntypoGithub from 'react-entypo/lib/entypo/Github'
import EntypoLinkedin from 'react-entypo/lib/entypo/Linkedin'
import EntypoMedium from 'react-entypo/lib/entypo/Medium'

import './link.css'

class Link extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      mouseOver: false
    }

    this.setMouseOver = this.setMouseOver.bind(this)
    this.unsetMouseOver = this.unsetMouseOver.bind(this)
  }

  addColor (color) {
    if (this.state.mouseOver === true) {
      return { background: '#FFB04C' }
    }
    return { background: `#${color}` } || {}
  }

  getIcon (icon) {
    // No break statements because they would be unreachable
    switch (icon) {
      case 'EntypoDocument':
        return EntypoDocument()
      case 'EntypoEmail':
        return EntypoEmail()
      case 'EntypoGithub':
        return EntypoGithub()
      case 'EntypoLinkedin':
        return EntypoLinkedin()
      case 'EntypoMedium':
        return EntypoMedium()
      default:
        break
    }
    return ''
  }

  setMouseOver () {
    this.setState({
      mouseOver: true
    })
  }

  unsetMouseOver () {
    this.setState({
      mouseOver: false
    })
  }

  render () {
    return (
      <a className='link-a' href={this.props.href}>
        <li
          className='link-li'
          onMouseEnter={this.setMouseOver}
          onMouseLeave={this.unsetMouseOver}
          style={this.addColor(this.props.color)}
        >
          {this.getIcon(this.props.icon)} {this.props.children}
        </li>
      </a>
    )
  }
}

export default Link
