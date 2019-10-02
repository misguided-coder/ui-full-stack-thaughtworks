import { Cal } from "./cal";

export class CalService implements Cal {

	constructor() {
		console.log('Inside CalService constructor()!!!');
	}

	sum(firstValue:number,secondValue:number) :number {
		console.log('Inside CalService sum()!!!');
		return firstValue + secondValue;
	}


	diff(firstValue:number,secondValue:number) :number {
		console.log('Inside CalService diff()!!!');
		return firstValue - secondValue;
	}


	multiply(firstValue:number,secondValue:number) :number {
		console.log('Inside CalService multiply()!!!');
		return firstValue * secondValue;
	}


	divide(firstValue:number,secondValue:number) :number {
		console.log('Inside CalService divide()!!!');
		return firstValue / secondValue;
	}
}
