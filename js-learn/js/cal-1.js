var calc = (function (calc) {
	calc.diff = function (a,b) {
		document.write(`DIFF : ${a-b}`);
		document.write("<br />");
	};	
	
	return calc;
})(calc || {});

