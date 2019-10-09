import {Component} from "@angular/core";

@Component({
	selector:'home',
	template:`<section>
			<h1>{{title}}</h1>
			<h1>Welome to the world of information.</h1>
		</section>`
})
export class HomeComponent {
	title = 'Home Page';

	constructor() {
		console.log("Inside HomeComponent constructor!!!");
	}

	
}
