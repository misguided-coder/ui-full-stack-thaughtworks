//ng imports
import {Component} from "@angular/core";

//model imports
import {Address} from "./address";


@Component({
	selector : 'app',
	template : `<section>		
			<h1>{{title}}</h1>
			<hr/>
			<h2>Name : {{name}}</h2>
			<h2>Age : {{age}}</h2>
			<h2>Balance : {{balance}}</h2>
			<h2>Phone : {{phone}}</h2>
			<h2>Emails : {{emails}}</h2>
			<h2>Personal Email : {{emails[0]}}</h2>
			<h2>Address : {{address.city}}</h2>
			<h2>Languages : {{languages.get('fr')}}</h2>
			<hr/>
			<h2>Value : {{2+2}}</h2>
			<h2>Value : {{name.toUpperCase()}}</h2>
			<h2>Value : {{name ? "Boss" : "Employee"}}</h2>
		</section>`
})
export class PersonComponent {

	title:string = "Simple Detail Component";	
	name:string = "Jaggu";	
	age:number = 24;
	balance:number = 150000.80;
	phone:string = "981000000";
	emails:Array<String> = ['a@a.com','b@b.com','c@c.com'];
	address:Address = new Address('10','Green Vally','Sohana Road','Gurugram','HR','India');
	languages:Map<String,String> = new Map();

	constructor() {
		console.log("Inside PersonComponent constructor!!!!");
		this.address = new Address('10','Green Vally','Sohana Road');
		this.languages.set('en','English');
		this.languages.set('hi','Hindi');
		this.languages.set('fr','French');
	}
}