import { Component,Input } from '@angular/core';

@Component({
  selector: 'color-box',
  template: `<div ngClass='box' [ngStyle]="{'background-color':bgColor,'color':fgColor}">
	        <p>70x70 Box</p>
	     </div>
	  `,
	styles: [`

		.box {
			width : 70px;
			height : 70px;
			display : inline-block;
			margin : 5px;
			text-align:center;
			color : white;
		}	
	`]
})
export class ColorBoxComponent {

	@Input()
	bgColor:string = 'blue';

	@Input()
	fgColor:string = 'black';
}

	

