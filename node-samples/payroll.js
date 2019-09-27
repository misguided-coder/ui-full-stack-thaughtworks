class Payroll {

	constructor() {
		console.log("Inside Payroll constructor!!!!");
	}

	hra(salary) {
		console.log(`HRA : ${salary*.40}`);
	}

	da(salary) {
		console.log(`DA : ${salary*.10}`);
	}
}

//exports.Payroll = Payroll;
exports.createPayroll = function() {
	return new Payroll();
};
