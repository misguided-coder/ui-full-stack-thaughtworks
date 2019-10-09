import { Component } from "@angular/core";

@Component({
	selector:'app',
	template:`<section>
			<h1>{{ title }}</h1>
			<input type='text' [(ngModel)]='keyword' placeholder='Search goes here' /><br/>
			<ul>
				<li *ngFor="let car of cars | filterByName:keyword">
					{{car}}
				</li>
			</ul>
		</section>`
})
export class CarListComponent {

	title = 'Beautiful and Luxury Cars';
	keyword:string;
	cars:string[] = [
		'Audi A5',
		'Audi A2',
		'Audi Q7',
		'Audi Q5',
		'BMW X1',
		'BMW X6',		
		'BMW X5',		
		'Jaguar XE',
		'Jaguar XF',
		'Jaguar XZ',
	];
}
