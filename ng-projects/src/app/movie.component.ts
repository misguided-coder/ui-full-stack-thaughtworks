import {Component} from "@angular/core";

@Component({
	selector:'movie',
	template:`<section>
			<h1>{{title}}</h1>
			<h1>{{name}}</h1>
			<img src='assets/images/robot.jpg' />			
			<!-- img [src]='path+poster' / -->	
			<img width=200 height=200 title='This movie is a action and fiction movie based on real life bird story' [src]='poster' />	
			<img [width]='posterSize.width' [height]='posterSize.height' [title]='posterTitle' [src]='poster' />	
			<img width='{{posterSize.width}}' height='{{posterSize.height}}' title='{{posterTitle}}' src='{{poster}}' />	
		</section>`
})
export class MovieComponent {
	title = 'Mobie Component';
	name = 'Robot 2.0';
	path = 'assets/images/';	
	poster:string = `${this.path}robot-2.0.jpg`;
	//poster:string = 'robot-2.0.jpg';  
	//poster:string = 'assets/robot-2.0.jpg'; 
	posterTitle = 'This movie is a action and fiction movie based on real life bird story';
	posterSize = {width:400,height:400};	
	
}
