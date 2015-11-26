import { createStore } from 'reflux'
import actions from './number-actions'


var NumberStore = createStore({
  listenables: actions,

  state: {
    loading: false,
    error: false,
    number: null
  },
  getInitialState(){  // used in components
    return this.state
  },

  onSelect(number){
    // clone the number object here, as we might have gotten it from somewhere else
    this.state.number = Object.assign({}, number)
    this.trigger(this.state)
  },

  onModify(){
    this.state.loading = true
    this.state.error = false
    this.trigger(this.state)
  },
  onModifyCompleted(result){
    this.state.loading = false
    this.state.number = result
    this.trigger(this.state)
  },
  onModifyFailed(){
    this.state.loading = false
    this.state.error = true
    this.trigger(this.state)
  }
});

export default NumberStore