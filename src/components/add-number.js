import React, { Component, PropTypes } from 'react'

export default class AddNumber extends Component {
  constructor(props){
    super()
    this.state = {
      number: props.initial
    }
  }
  change = (e) => {
    console.log(e)
    this.setState({
      number: e.target.value
    })
  }
  onAdd = () => {
    this.props.onAdd(this.state.number)
  }
  render() {
    return (
      <li>
        <input type="text" value={this.state.number} onChange={this.change}/>
        <button onClick={this.onAdd}>Add</button>
      </li>
    )
  }
}

AddNumber.propTypes = {
  initial: PropTypes.number,
  onAdd: PropTypes.func.required
}

/*
 import React, { Component } from 'react'
 import Number from './number'
 import numbersStore from '../numbers-store'
 import { connect } from 'reflux'
 import NumbersActions from '../numbers-actions'
 import AddNumber from './add-number'


 var NumbersList = React.createClass({
 mixins: [connect(numbersStore)],

 componentWillMount(){
 NumbersActions.load()
 },

 addNumber(number){
 NumbersActions.add(number)
 },

 render() {
 if(this.state.error){
 return <div>could not load numbers</div>
 }
 if(this.state.loading){
 return <div>loading numbers</div>
 }
 var numbers = this.state.numbers
 var nextNumber = parseInt(numbers[numbers.length-1].number)+1

 return (
 <ul>
 {numbers.map((number, index) =>
 <li key={index}>
 {number.number}
 </li>
 )}
 <AddNumber initial={nextNumber} key={nextNumber} onAdd={this.addNumber} />
 </ul>
 );
 }
 })

 export default NumbersList



 */