//let math = require('./math.js');
let math = require('./math');
let hr = require('./payroll');

//var payroll = new hr.Payroll();
var payroll = hr.createPayroll();

payroll.hra(20000.00);
payroll.da(20000.00);

var square = new math.Square(); 

console.log(typeof square);

console.log(math.title);

math.doSum(12,6);
math.doDiff(12,6);
math.doMultiply(12,6);
math.doDivide(12,6);


