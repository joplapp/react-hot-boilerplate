import { createActions } from 'reflux'


var NumberActions = createActions({
  load: {asyncResult: true},
  modify: {asyncResult: true},
  double: {}
});

NumberActions.load.listen(function(id){
  return fetch('/api/numbers/'+id)
    .then((resp) => resp.json())
    .then(this.completed, this.failed)
})

NumberActions.modify.listen(function(id, value){
  return fetch('/api/numbers/'+id, {
    method: 'put',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ value })
  })
    .then((resp) => resp.json())
    .then(this.completed, this.failed)
})


export default NumberActions