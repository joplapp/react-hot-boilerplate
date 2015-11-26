import React, { Component, PropTypes } from 'react'

export default class Number extends Component {
  render() {
    let number = this.props.number

    return (
      <span style={{color: number.value%2===0 ? 'green' : 'red'}}>
        {number.value}
      </span>
    )
  }
}

Number.PropTypes = {
  value: PropTypes.number.isRequired
}
