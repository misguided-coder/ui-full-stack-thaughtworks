import {Component} from "@angular/core";

@Component({
	selector:'app',
	template:`<section>
			<h1>{{title}}</h1>
			<h1>{{name}}</h1>
			<button (click)='buy($event);' type=button>Buy</button>
			<button (click)='sell($event);' type=button>Sell</button>
			<hr/>
			<h2>{{message}}</h2>
			<p>{{message}}<p>
			<section>{{message}}</section>
			<div>{{message}}</div>
		</section>`
})
export class CarComponent {

	title = 'Car Component';
	name = 'Jaguar XF';
	price:number = 4000000;
	message:string;

	constructor () {
		console.log(`Inside CarComponent constructor!!`);
		/*setInterval(()=>{
			this.message = `Car Price : ${this.price * Math.random()}`;	
		},2000);*/

	}	

	buy (evt) {
		console.log(`Car cost is ${this.price * 5}`);
		this.message = `Car Buying Price : ${this.price * 2}`;
	}		

	sell (evt) {
		console.log(`Car sold in ${this.price}`);
		this.message = `Car Selling Price : ${this.price * .40}`;
	}		
}
