import React, { Component } from 'react'
import ColoredButton from './colored-button'
import ResponsiveContent from './responsive-content'


export default class App extends Component {
  render() {
    return (<div>
      <h1>Numbers</h1>

      <ColoredButton color="green">Click me</ColoredButton>

      {/*<ResponsiveContent />*/ }

      {this.props.children}
    </div>);
  }
}
