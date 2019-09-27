var book = require('./book');
var library = require('./library');

var book1 = book.createBook([1000,'JSP in 2 days',400.00,'Alex']);
var book2 = book.createBook([1001,'EJB in 2 days',400.00,'Ram']);
var book3 = book.createBook([1002,'JS in 2 days',600.00,'Raj']);
var book4 = book.createBook([1003,'NG in 2 days',800.00,'Alex']);
var book5 = book.createBook([1004,'SaSS in 2 days',100.00,'Alex']);

let lms = library.createLibrary('Delhi Public Library');
console.log(lms);

lms.addBook(book1);
lms.addBook(book2);
lms.addBook(book3);
lms.addBook(book4);
lms.addBook(book5);

lms.listAll();

lms.removeBook(1002);
lms.removeBook(1008);

lms.listAll();