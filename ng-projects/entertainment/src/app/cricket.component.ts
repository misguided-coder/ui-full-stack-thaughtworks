import {Component} from "@angular/core";

@Component({
	selector:'cricket',
	template:`<section>
			<h1>{{title}}</h1>
			<h1>India and Australia wil play on 12th Sep.</h1>
		</section>`
})
export class CricketComponent {
	title = 'World Cup Final Match';

	constructor() {
		console.log("Inside CricketComponent constructor!!!");
	}


	
}
