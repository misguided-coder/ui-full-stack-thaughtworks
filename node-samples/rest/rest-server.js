let app = require('express');
let bodyParser = require('body-parser');

let server = app();
server.use(bodyParser.json());

let books = new Map();

books.set(1000,{"isbn":1000,"title":"Learn Angular","price":560.00,"author":"Sahil Sindhu"});
books.set(1001,{"isbn":1001,"title":"Learn JavaScript","price":260.00,"author":"Kriti Bhagat"});
books.set(1002,{"isbn":1002,"title":"Learn ES6","price":260.00,"author":"Pankaj Tiwari"});
books.set(1003,{"isbn":1003,"title":"SASS in 2 days","price":460.00,"author":"Sahil Sindhu"});
books.set(1004,{"isbn":1004,"title":"Mastering TypeScript","price":900.00,"author":"Sahil Sindhu"});
books.set(1005,{"isbn":1005,"title":"Learn BEM","price":100.00,"author":"Pankaj Tiwari"});
books.set(1006,{"isbn":1006,"title":"JavaScript Good Parts","price":800.00,"author":"Kriti Bhagat"});

//read all calender months
server.get('/api/month/all',function(req,res){
	console.log("Just running api/month/all REST URI!!");
	res.status(200).send(["Jan","Feb","Mar"]);
});

//read all books
server.get('/api/book/all',function(req,res){
	console.log("Just running api/book/all REST URI!!");
	let values = [];
	for(let book of books.values()) {
		values.push(book);
	}
	res.status(200).send(values);
});

//read one book
server.get('/api/book',function(req,res){
	console.log("Just running api/book REST URI!!");
	let book = books.get(1005);
	res.status(200).send(book);
});

//read one more book
server.get('/api/book/:isbn',function(req,res){
	console.log("Just running api/book/:isbn REST URI!!");
	let isbn = parseInt(req.params.isbn);
	let book = books.get(isbn);
	res.status(200).send(book);
});

//create new book
server.post('/api/book',function(req,res){
	console.log("Creating a new book using api/book/ REST URI!!");
	
	let isbn = books.size + 1000;
	console.log(req.body);

	var book = {
		"isbn": isbn,
		"title": req.body.title,
		"price": req.body.price,
		"author": req.body.author
	};
	
	books.set(isbn,book);
	res.status(200).send({"status":"success","message":`Book with ISBN ${isbn} created successfully`});
});

//update existing book
server.put('/api/book/:isbn',function(req,res){
	console.log("Updating book using api/book/ REST URI!!");
	
	let isbn = parseInt(req.params.isbn);

	var book = {
		"isbn": isbn,
		"title": req.body.title,
		"price": req.body.price,
		"author": req.body.author
	};
	
	if(books.has(isbn)) {
		books.set(isbn,book);
		return res.status(200).send({"status":"success","message":`Book with ISBN ${isbn} updated uccessfully`});
	} else {
		return res.status(404).send({"status":"failure","message":`Book with ISBN ${isbn} not found`});
	}

});

//delete existing book
server.delete('/api/book/:isbn',function(req,res){
	console.log("Deleting book using api/book/ REST URI!!");
	
	let isbn = parseInt(req.params.isbn);

	if(books.has(isbn)) {
		books.delete(isbn);
		return res.status(200).send({"status":"success","message":`Book with ISBN ${isbn} deleted uccessfully`});
	} else {
		return res.status(404).send({"status":"failure","message":`Book with ISBN ${isbn} not found`});
	}
});

const PORT = 5000;

server.listen(PORT,() => {
	console.log(`Rest Server is ready on port ${PORT}`);
});

