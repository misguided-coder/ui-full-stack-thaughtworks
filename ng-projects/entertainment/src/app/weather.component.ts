import {Component} from "@angular/core";

@Component({
	selector:'weather',
	template:`<section>
			<h1>{{title}}</h1>
			<h1>Weather is cool.</h1>
		</section>`
})
export class WeatherComponent {
	title = 'Everday Weather Report';

	constructor() {
		console.log("Inside WeatherComponent constructor!!!");
	}

	
}
