import { createStore } from 'reflux'
import actions from './numbers-actions'
import NumberStore from './number-store'


export default createStore({
  listenables: actions,

  state: {
    loading: true,
    error: false,
    numbers: null
  },

  // add listener to NumberStore
  init(){
    this.listenTo(NumberStore, this.onNumberChange)
  },

  getInitialState(){  // used in components
    return this.state
  },
  onLoad(){
    this.state.loading = true
    this.state.error = false
    this.state.numbers = null
    this.trigger(this.state)
  },
  onLoadCompleted(result){
    this.state.loading = false
    this.state.numbers = result
    this.trigger(this.state)
  },
  onLoadFailed(){
    this.state.loading = false
    this.state.error = true
    this.trigger(this.state)
  },

  onAddCompleted(added){
    this.state.numbers.push(added)
    this.trigger(this.state)
  },

  // if a number changes, update the array that contains all numbers
  onNumberChange(state){
    var modifiedNumber = state.number
    if(modifiedNumber){
      var existing = this.state.numbers.filter(
        (number) => number.id === modifiedNumber.id
      )
      if(existing.length){
        this.state.numbers.splice(
          this.state.numbers.indexOf(existing[0]), 1, Object.assign({}, modifiedNumber))
      }

      this.trigger(this.state)
    }
  }
});