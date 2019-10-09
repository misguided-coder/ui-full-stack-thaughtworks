import { Component } from "@angular/core";

@Component({
	selector:'app',
	template:`<section>
			<h1>{{title}}</h1>
			<button (click)='changeValue();'>Change</button>
			<hr/>		
			<song [name]="songName" [singer]="singerName"></song>
		</section>`
})
export class SongListComponent {

	title = 'Song List Component';
	songName:string = 'Hello ji....';
	singerName:string = 'Sonu Nigam';
		
	constructor() {
		console.log(`Inside SongListComponent constructor!!`);
	}

	changeValue() {
		this.songName = this.songName+ 'ji..';
	}

}
