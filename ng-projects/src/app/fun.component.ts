import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `<section>
		<div ngClass='box' *ngFor='let color of colors' [ngStyle]="{'background-color':color}">
		</div>
 	 </section>`,
	styles: [`

		.box {
			width : 70px;
			height : 70px;
			display : inline-block;
			margin : 5px;
		}	
	`]
})
export class FunComponent {
	colors:Array<string> = [
          'gray','blue','tomato',
	  'purple','chocolate','pink',
	  'orange','yellow','black',
	  'green','violet','skyblue'
        ];

}

	

