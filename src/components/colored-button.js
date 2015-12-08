import React, { Component, PropTypes } from 'react'


export default class ColoredButton extends Component {

  render() {
    return (
      <button {...this.props} style={{color: this.props.color}}>
        {this.props.children}
      </button>
    )
  }
}

ColoredButton.propTypes = {
  color: PropTypes.string
}
