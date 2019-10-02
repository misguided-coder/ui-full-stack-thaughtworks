import { Injectable } from '@angular/core';

import { QuoteSupplierService } from "./quote-supplier.service";

import { Quote } from './quote';

@Injectable()
export class QuoteService implements Quote {
	
	quotes:Array<string>;

	constructor(private quoteSupplierService:QuoteSupplierService) {
		console.log('Inside QuoteService constructor()!!!');
		this.quotes = this.quoteSupplierService.allQuotes();
	}

	next() :string {
		console.log('Inside QuoteService next()!!!');
		let idx = Math.floor(Math.random() * this.quotes.length);
		return this.quotes[idx];
	}
}
