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


var numbers = [1,1,2,3,5,8,13,21];

app.get('/api/numbers', function(req, res){
	var result = numbers.map(function(n){
		return {
			number: n,
			even: n%2 == 0
		}
	});
	res.send(result);
});


app.post('/api/numbers', function(req, res){
	var number = parseInt(req.body.number);
	numbers.push(number);

	res.send({
		number: number,
		even: number%2 == 0
	});
});

app.delete('/api/numbers', function(req, res){

	var number = parseInt(req.body.number);

	var removed = numbers.splice(numbers.indexOf(number),1)

	res.send(removed);
});