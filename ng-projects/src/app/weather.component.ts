import {Component,Input} from "@angular/core";

@Component({
	selector:'weather',
	template:`<section>
			<h1>{{title}}</h1>
			<hr/>			
			<h1>City : Pune</h1>
			<h1>Max {{info.get('Pune').split(',')[0]}} and Min {{info.get('Pune').split(',')[1]}} temprature on : {{currentDate}} day</h1>
		</section>`
})
export class WeatherComponent {

	title = 'Everday Weather Report';
	currentDate = new Date();

	@Input()
	info:Map<String,String>;
	
}
