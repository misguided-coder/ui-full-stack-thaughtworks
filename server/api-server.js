let app = require('express');
let bodyParser = require('body-parser');
let fs = require('fs');



let server = app();

server.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200"); 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
server.use(bodyParser.json());

const customersDataFile = __dirname+'/data/customers.json';
const ordersDataFile = __dirname+'/data/orders.json';

//read all customers
server.get('/api/customers',function(req,res){
	console.log("Inside read all customers API!!");
	res.status(200).sendFile(customersDataFile);
});

server.get('/api/customers',function(req,res){
	console.log("Inside read all customers API!!");
	let resultData = {};
	let customerArray = fs.readFileSync(customersDataFile);
	resultData.cutomers =  customerArray;
	resultData.prices = []; 
	let ordersArray = fs.readFileSync(ordersDataFile);
	let customerOrdersArray = [];
	for(var customer of customerArray) {
		customerOrdersArray = ordersArray.filter((order) => {
			return customer.id == order.cid;
		});
		let total = 0;
		for(let order of customerOrdersArray){
			for(let product of order.products){
				total += product.totalPrice;
			}
		}	
		resultData.prices.push({'cid':order.cid,'total':total});		

	}
	res.status(200).send(resultData);
});


const PORT = 5000;

server.listen(PORT,() => {
	console.log(`API Server is ready on port ${PORT}`);
});