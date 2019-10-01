import {Component} from "@angular/core";

@Component({
	selector:'app',
	template:`<section>
			<h1>{{title}}</h1>
			<label for='city-input'>Enter Your City : </label><br/>
			<input type='text' value='Pune' id='city-input'  /><br/>
			<input type='text' value='{{cityName}}' id='city-input'  /><br/>
			<input type='text' [value]='cityName' id='city-input'  /><br/>
			<input type='text' [(ngModel)]='cityName' id='city-input'  /><br/>
			<hr/>			
			<h1>We know Mr you live in {{cityName}}</h1>
		</section>`
})
export class CityComponent {

	title = 'City Component';
	cityName = 'Delhi';
		
	constructor () {
		console.log(`Inside CityComponent constructor!!`);
	}	
}
