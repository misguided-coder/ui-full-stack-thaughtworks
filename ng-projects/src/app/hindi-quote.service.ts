import { Quote } from './quote';

export class HindiQuoteService implements Quote {

	constructor() {
		console.log('Inside HindiQuoteService constructor()!!!');
	}

	next() :string {
		console.log('Inside HindiQuoteService next()!!!');
		return 'hindi quote are amazing';
	}
}
