var TW = (function (TW) {
	
	TW.calc = {};

	TW.calc.title = 'Simple Math Calculator';
	TW.calc.sum = function (a,b) {
			document.write(`SUM : ${a+b}`);
			document.write("<br />");
	};

	TW.calc.diff = function (a,b) {
		document.write(`DIFF : ${a-b}`);
		document.write("<br />");
	};	
	
	return TW;
})(TW || {});

