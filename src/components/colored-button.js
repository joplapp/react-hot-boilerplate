import React, { Component, PropTypes } from 'react'

export default class ColoredButton extends Component {

  shouldComponentUpdate(nextProps, nextState){
    return nextProps.color !== this.props.color
  }

  render() {
    return (
      <button style={{color: this.props.color}}>
        {this.props.children}
      </button>
    )
  }
}

ColoredButton.propTypes = {
  color: PropTypes.string
}
