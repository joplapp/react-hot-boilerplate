import React, { Component } from 'react'
import { Link } from 'react-router'
import Number from './number'
import numbersStore from '../numbers-store'
import { connect } from 'reflux'
import NumbersActions from '../numbers-actions'
import NumberActions from '../number-actions'
import { FormattedMessage } from 'react-intl'

var NumbersList = React.createClass({
  mixins: [connect(numbersStore)],

  componentWillMount(){
    NumbersActions.load()
  },

  addNumber(){
    NumbersActions.add(this.refs.input.value)
  },

  render() {
    if(this.state.error){
      return <div>could not load numbers</div>
    }
    if(this.state.loading){
      return <div>loading numbers</div>
    }
    return (
      <ul>
        <li>
          <FormattedMessage
            id="numbers count"
            description="Counter for numbers"
            defaultMessage="{count} {count, plural,
                zero {Numbers}
                one {Number}
                other {Numbers}}"
            values={{count: this.state.numbers.length}}
          />
        </li>
        {this.state.numbers.map((number) =>
          <li key={number.id}>
            <Link to={"/numbers/"+number.id}>
              <Number number={number} />
            </Link>
          </li>
        )}
        <li><input type="text" ref="input"/><button onClick={this.addNumber}>Add</button></li>

        {this.props.children}
      </ul>
    );
  }
})

export default NumbersList


