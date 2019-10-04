import {Component} from "@angular/core";

@Component({
	selector:'app',
	template:`<section>
			<h1>{{title}}</h1>
			<label for='txt0'>Enter Number : </label>
			<input type='number' [(ngModel)]='firstValue' id='txt0'  /><br/>
			<label for='txt1'>Enter Number : </label>
			<input type='number' [(ngModel)]='secondValue' id='txt1'  /><br/>
			<input type='button' value='SUM' (click)='doSum()'  /><br/>
			<input type='button' value='DIFF' (click)='doDiff()'  /><br/>
			<hr/>			
			<h1>Result : {{result}}</h1>
		</section>`
})
export class CalComponent {

	title = 'Simple Math Calculator';
	firstValue:number = 20;
	secondValue:number = 10;
	result:number = 30;

	doSum() {
		console.log('Doing sum!!!');
		this.result =  this.firstValue + this.secondValue;
	}

	doDiff() {
		console.log('Doing diff!!!');
		this.result =  this.firstValue - this.secondValue;
	}
	
		
}
