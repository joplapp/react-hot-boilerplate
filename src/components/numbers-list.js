import React, { Component } from 'react'
import Number from './number'
import numbersStore from '../numbers-store'
import { connect } from 'reflux'
import NumbersActions from '../numbers-actions'
import NumberActions from '../number-actions'


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
        {this.state.numbers.map((number) =>
          <li onClick={() => NumberActions.select(number)} key={number.id}>
            <Number number={number} />
          </li>
        )}
        <li><input type="text" ref="input"/><button onClick={this.addNumber}>Add</button></li>
      </ul>
    );
  }
})

export default NumbersList


