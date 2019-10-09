let app = require('express');
let bodyParser = require('body-parser');

let server = app();

server.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200"); 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
server.use(bodyParser.json());

const customersDataFile = __dirname+'/data/customers.json';

//read all customers
server.get('/api/customers',function(req,res){
	console.log("Inside read all customers API!!");
	res.status(200).sendFile(customersDataFile);
});

const PORT = 5000;

server.listen(PORT,() => {
	console.log(`API Server is ready on port ${PORT}`);
});