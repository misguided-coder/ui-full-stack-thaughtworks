import { Injectable } from '@angular/core';

@Injectable({
	providedIn:'root'
})
export class TimeService {

	constructor() {
		console.log('Inside TimeService constructor()!!!');
	}

	now() :string {
		let date = new Date();
		console.log('Inside TimeService current()!!!');
		return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
	}
}
