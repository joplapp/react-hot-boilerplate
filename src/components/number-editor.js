import React, { Component } from 'react'
import Number from './number'
import numberStore from '../number-store'
import { connect } from 'reflux'
import NumberActions from '../number-actions'


var NumbersList = React.createClass({
  mixins: [connect(numberStore)],

  submit(){
    NumberActions.modify(this.state.number.id, this.refs.input.value)
  },

  render() {
    if(this.state.error){
      return <div>could not load number</div>
    }
    if(this.state.loading){
      return <div>loading number</div>
    }
    if(!this.state.number){
      return <div>select a number to edit</div>
    }

    return (
      <div> Modify Number <br />
        <input key={this.state.number.id} ref="input" defaultValue={this.state.number.value} />
        <button onClick={this.submit}>change</button>
      </div>
    );
  }
})

export default NumbersList


