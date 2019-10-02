import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `<section>
		<h2 *ngIf='false'>I am the boss</h2>
		<h2 [hidden]='true'>I am the boss</h2>
		<h2 *ngIf='0'>I am the boss</h2>
		<h2 *ngIf="''">I am the boss</h2>
		<h2 *ngIf='boss'>I am the boss</h2>

		<h2 *ngIf='age <= 20'>You are Young.</h2>
		<h2 *ngIf='age > 20'>Your are Old.</h2>

		<h2 *ngIf='age <= 20 && balance >= 40000.00'>You are Young and Rich</h2>
	
	</section>`,
})
export class FunComponent {
	//boss:string = 'Jaggu';
	boss:string = false;
	age:nubmer = 12;
	balance:nubmer = 50000.00;

}
