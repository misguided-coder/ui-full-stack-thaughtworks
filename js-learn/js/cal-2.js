var calc = (function (calc) {
	calc.title = 'Simple Math Calculator';
	calc.sum = function (a,b) {
			document.write(`SUM : ${a+b}`);
			document.write("<br />");
	};
	return calc;
})(calc || {});

