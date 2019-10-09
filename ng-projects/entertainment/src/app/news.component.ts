import {Component} from "@angular/core";

@Component({
	selector:'news',
	template:`<section>
			<h1>{{title}}</h1>
			<h1>India is a super power.</h1>
		</section>`
})
export class NewsComponent {
	title = 'BBC News';

	constructor() {
		console.log("Inside NewsComponent constructor!!!");
	}

	
}
