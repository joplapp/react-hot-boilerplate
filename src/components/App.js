import React, { Component } from 'react'
import ColoredButton from './colored-button'

export default class App extends Component {
  render() {
    return (<div>
      <h1>Hello, world.</h1>

      <ColoredButton color="green">Click me</ColoredButton>
      <ColoredButton color={2}>Don't click me</ColoredButton>
    </div>);
  }
}
