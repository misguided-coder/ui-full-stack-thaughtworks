var TW = (function (TW) {
	
	TW.payroll = {};

	TW.payroll.title = 'Simple Salary Calculator';
	TW.payroll.hra = function () {
			document.write(`HRA : ${this.salary*.40}`);
			document.write("<br />");
	};

	TW.payroll.da = function () {
			document.write(`DA : ${this.salary*.10}`);
			document.write("<br />");
	};

	TW.payroll.ta = function () {
			document.write(`TA : ${this.salary*.08}`);
			document.write("<br />");
	};
	
	return TW;
})(TW || {});

