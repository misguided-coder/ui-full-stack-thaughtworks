import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `<section>
		<h2>4x3 Color Palette</h2>
		<hr/>
		<color-box *ngFor='let value of colors'  [bgColor]='value' [fgColor]="'gray'">
		</color-box>
 	 </section>`
})
export class ColorGallaryComponent {
	colors:Array<string> = [
          'gray','blue','tomato',
	  'purple','chocolate','pink',
	  'orange','yellow','black',
	  'green','violet','skyblue'
        ];

}

	

