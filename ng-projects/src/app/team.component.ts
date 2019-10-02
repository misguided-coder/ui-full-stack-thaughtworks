import { Component } from '@angular/core';

import { QuoteService } from "./quote.service";

@Component({
  //providers: [ QuoteService ],
  selector: 'app',
  template: `<section>
		<h2>{{title}}</h2>
		<h3>{{currentQuote}}</h3>
		<div>Team  Ready : {{team}}</div>
		<hr/>
		<cricket (memberAdded)='add($event);'></cricket>		
	</section>`,
})
export class TeamComponent {
  title = 'Team Management';
  team:Array<String>;
  currentQuote:string;

  constructor(private quoteService:QuoteService) {
	this.team = ['Dhoni','Sachin','Rahul'];
	this.currentQuote = this.quoteService.next();
  }

  add(evt) {
	console.log("Inside add()!!!!");
	this.team.push(evt.memberName);
	this.team = [...this.team];
  }

}
