import {Component} from "@angular/core";
import {Subject} from "rxjs";

@Component({
	selector:'app',
	template:`<section>
			<h1>{{title}}</h1>
			<hr/>			
		</section>`
})
export class ReactiveComponent {

	title = 'Simple Reactive Component';

	constructor () {
		let newsSubject = new Subject();
		
		console.log("observable is ready!!!!!");

		//Subscriber 1
		newsSubject.subscribe(this.createChart);		

		//Subscriber 2
		newsSubject.subscribe(this.createTable);		

		//Subscriber 3
		newsSubject.subscribe(this.createList);		

		console.log("observers registered!!!!!");

		newsSubject.next('BJP will win');
		newsSubject.next('Interset rates are lowered');
	}	

	//Observer 1
	createChart(state) {
		console.log(`Chart : ${state}`);
	}

	//Observer 2
	createTable(state) {
		console.log(`Table : ${state}`);
	}

	//Observer 3
	createList(state) {
		console.log(`List : ${state}`);
	}

}
