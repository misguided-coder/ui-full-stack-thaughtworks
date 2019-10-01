import {Component} from "@angular/core";

@Component({
	selector:'app',
	template:`<section>
			<h1>{{title}}</h1>
			<hr/>			
			<img [src]='poster' />
			<weather [info]='weatherData'></weather>
		</section>`
})
export class DashboardComponent {

	title = 'Weather Department Forcast';
	weatherData:Map<String,String> = new Map();
	poster = 'assets/images/weather.jpg';

	constructor() {
		this.weatherData.set('Pune','30,25');
		this.weatherData.set('Delhi','50,40');
		this.weatherData.set('Mumbai','43,28');
		this.weatherData.set('Haridwar','40,20');
	}

}
