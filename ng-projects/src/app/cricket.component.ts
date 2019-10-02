import { Component,EventEmitter,Output,Inject } from '@angular/core';

import { Quote } from "./quote";
import { TimeService } from "./time.service";

@Component({
  //providers: [ QuoteService ], 
  selector: 'cricket',
  template: `<section>
		<h2>{{title}}</h2>
		<h3>{{currentQuote}}</h3>
		<h3>Favourite Food ::::  {{food}}</h3>
		<h3>Current Time ::::  {{timeService.now()}}</h3>
		Member Name : <input type='text' [(ngModel)]='name' />		
		<input type='button' (click)='addMember();' value='Add Member' />		
	</section>`,
})
export class CricketComponent {
  title = '20:20 Cricket Match';
  name:string = 'Kapil Dev';
  currentQuote:string;

  constructor(private timeService:TimeService,@Inject('quoteService') private quoteService:Quote,@Inject('favouriteFood') private food:string) {
	this.currentQuote = this.quoteService.next();
  }

  @Output()	
  memberAdded = new EventEmitter();

  addMember() {
	console.log('Inside addMember!!');	
	this.memberAdded.emit({memberName:this.name,ranking:10});
  }

}
