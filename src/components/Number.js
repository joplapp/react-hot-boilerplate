import React, { Component, PropTypes } from 'react'

export default class Number extends Component {
  render() {
    let number = this.props.number

    return (
      <span style={{color: number.even ? 'green' : 'red'}}>
        {number.number}
      </span>
    )
  }
}

Number.PropTypes = {
  number: PropTypes.number.required,
  even: PropTypes.bool
}
