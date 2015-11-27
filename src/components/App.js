import React, { Component } from 'react'
import ColoredButton from './colored-button'
import ResponsiveContent from './responsive-content'
import { FormattedMessage } from 'react-intl'


export default class App extends Component {
  render() {
    return (<div>
      <h1>
        <FormattedMessage
          id="numbers headline"
          description="Headline on the main page"
          defaultMessage="Numbers"
        />
      </h1>

      <ColoredButton color="green">Click me</ColoredButton>

      {/*<ResponsiveContent />*/ }

      {this.props.children}
    </div>);
  }
}
