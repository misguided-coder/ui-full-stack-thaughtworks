function sum(a,b) {
	console.log(a+b);
}

function diff(a,b) {
	console.log(a-b);
}


class Square {
}

module.exports.Square  = Square;
//exports.Square  = Square;
exports.title = 'Simple Math Calculator';
exports.doSum = sum;
exports.doDiff = diff;
exports.doMultiply = function (a,b) {
	console.log(a*b);
};

exports.doDivide = (a,b) => {
	console.log(a/b);
};
  
