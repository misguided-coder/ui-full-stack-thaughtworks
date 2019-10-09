import {Component} from "@angular/core";

@Component({
	selector:'app',
	template:`<section>
			<header>
				<h1>{{title}}</h1>
				<nav>
				<ul>
					<li><a [routerLink]="['news']">News</a></li>
					<li><a [routerLink]="['weather']">Weather</a></li>
					<li><a [routerLink]="['cricket']">Cricket</a></li>
					<li><a [routerLink]="['']">Movies</a></li>
					<li><a [routerLink]="['']">Songs</a></li>
					<li><a [routerLink]="['book/1001']">Book 1</a></li>
					<li><a [routerLink]="['book/1002']">Book 2</a></li>
					<li><a [routerLink]="['book/1003']">Book 3</a></li>
					<hr />
					<li *ngFor='let value of values'>
						<a [routerLink]="['book',value]">Book ISBN {{value}}</a>
					</li>
				</ul>
				</nav>
			</header>
			<router-outlet></router-outlet>
		</section>`
})
export class AppComponent {
	title = 'Information Zone';
	values:number[] = [1001,1002,1003,1004,1005];

	constructor() {
		console.log("Inside AppComponent constructor!!!");
	}

}
