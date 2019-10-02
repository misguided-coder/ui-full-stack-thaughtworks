const quotes = [
	'Training will finish at 11 PM',
	'Life is cool',
	'Life is one time offer',
	'Laden is alive',
	'Laden is a very humble man'
]; 	

export class QuoteSupplierService {

	constructor() {
		console.log('Inside QuoteSupplierService constructor()!!!');
	}

	allQuotes() :Array<string> {
		return quotes;
	}
}
