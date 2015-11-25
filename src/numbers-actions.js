import { createActions } from 'reflux'


var NumbersActions = createActions({
  load: {asyncResult: true},
  add: {asyncResult: true},
  remove: {asyncResult: true}
});

NumbersActions.load.listen(function(){
  return fetch('api/numbers')
    .then((resp) => resp.json())
    .then(this.completed, this.failed)
})

NumbersActions.add.listen(function(number){
  return fetch('api/numbers', {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      number: number
    })
  })
    .then((resp) => resp.json())
    .then(this.completed, this.failed)
})


export default NumbersActions