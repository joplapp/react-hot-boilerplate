import React, { Component } from 'react'

export default class Cell extends Component {
  constructor(){
    super()
  }
  onChange = (e) => {
    this.props.onChange(+e.target.value)
  }

  render() {
    return (
      <td>
        <input type="number" value={this.props.value}
               onChange={this.onChange} />
      </td>
    );
  }
}
