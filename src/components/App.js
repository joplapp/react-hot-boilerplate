import React, { Component } from 'react'
import ColoredButton from './colored-button'
import ResponsiveContent from './responsive-content'
import NumbersList from './numbers-list'


export default class App extends Component {
  render() {
    return (<div>
      <h1>Hello, world.</h1>

      <ColoredButton color="green">Click me</ColoredButton>
      <ColoredButton color={2}>Don't click me</ColoredButton>

      {/*<ResponsiveContent />*/ }

      <NumbersList />
    </div>);
  }
}
