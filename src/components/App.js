import React, { Component } from 'react'
import ColoredButton from './colored-button'
import ResponsiveContent from './responsive-content'
import { FormattedMessage, FormattedNumber, FormattedDate, FormattedRelative } from 'react-intl'

import SomeForm from './form'

export default class App extends Component {
  render() {
    var postDate    = Date.now() - (1000 * 60 * 60 * 24);
    var commentDate = Date.now() - (1000 * 10);
    var meetingDate = Date.now() + (1000 * 60 * 51);

    return (<div>

      <h1>
        <FormattedNumber value={1000}/> {' '}
        <FormattedDate value={Date.now()}/> {' '}
        <FormattedMessage
          id="numbers headline"
          description="Headline on the main page"
          defaultMessage="Numbers"
        />
      </h1>

      <ColoredButton color="green">Click me</ColoredButton>

      <SomeForm />
      {/*<ResponsiveContent />*/ }

      {this.props.children}
      <p><FormattedRelative value={postDate} /></p>
      <p><FormattedRelative value={commentDate} updateInterval={10}/></p>
      <p><FormattedRelative value={meetingDate} /></p>
    </div>);
  }
}
