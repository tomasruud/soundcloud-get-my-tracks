import React from 'react'
import PropTypes from 'prop-types'

import {link, visible, closed} from './Reveal.module.css'

class Reveal extends React.Component {
  state = {
    open: this.props.open
  }

  toggle = () => {
    this.setState(last => ({open: !last.open}))
  }

  render() {
    const {label, children, ...props} = this.props
    const {open} = this.state

    return (
      <span {...props}>
        <button onClick={this.toggle} className={link}>
          {label} {open ? '🔼' : '🔽'}
        </button>
        <span className={open ? visible : closed}>{open && children}</span>
      </span>
    )
  }
}

Reveal.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
  open: PropTypes.bool
}

Reveal.defaultProps = {
  open: false
}

export default Reveal