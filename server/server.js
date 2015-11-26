var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

var isProduction = process.env.NODE_ENV === 'production';
var port = isProduction ? process.env.PORT : 3030;
var publicPath = path.resolve(__dirname, 'public');

app.use(express.static(publicPath));

app.use(bodyParser.json());

// And run the server
app.listen(port, function () {
	console.log('Server running on port ' + port);
});


// CRUD API for 'numbers'

var numbers = [1,1,2,3,5,8,13,21].map(function(n, index){
  return {
    value: n,
    id: index
  }
});


app.get('/api/numbers', function(req, res){
	res.send(numbers);
});


app.post('/api/numbers', function(req, res){
	var number = parseInt(req.body.number);
  var newEntry = {
    value: number,
    id: numbers.length
  };
	numbers.push(newEntry);

	res.send(newEntry);
});


// 'modify' a number ( = replace it by a different one)
app.put('/api/numbers/:id', function(req, res){
  var id = parseInt(req.params.id);

  var number = numbers.filter(function(n){
    return n.id === id
  })[0]

  number.value = parseInt(req.body.value);

  res.send(number);
});


app.delete('/api/numbers/:id', function(req, res){
  var id = parseInt(req.params.id);

  var number = numbers.filter(function(n){
    return n.id === id
  })[0];

	var removed = numbers.splice(numbers.indexOf(number),1)

	res.send(removed);
});