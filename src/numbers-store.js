import { createStore } from 'reflux'
import actions from './numbers-actions'

export default createStore({
  listenables: actions,

  state: {
    loading: true,
    numbers: null
  },
  onLoad(){
    this.state.loading = true
    this.state.numbers = null
    this.trigger(this.state)
  },
  onLoadCompleted(result){
    this.state.loading = false
    this.state.numbers = result
    this.trigger(this.state)
  },
  onLoadFailed(){//..
  }
});


export default createStore({
  listenables: actions,

  state: {
    loading: true,
    error: false,
    numbers: null
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

  onAddCompleted(){
    actions.load()
  }
});