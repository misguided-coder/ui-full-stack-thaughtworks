import {Component} from "@angular/core";

@Component({
	selector:'app',
	template:`<section>
			<h2>Name : Raj</h2>
			<h2>Phone : 98120000</h2>
			<h2>Value : {{ 13490.00 | currency:'GBP':true }}</h2>
			<h2>Name : {{ fullName }}</h2>
			<h2>Name : {{ fullName | lowercase }}</h2>
			<h2>Name : {{ fullName | uppercase }}</h2>
			<h2>Name : {{ fullName | uppercase | initials:'Mr.' | lowercase }}</h2>
			<h2>Name : {{ fullName | initials:'Dr.' }}</h2>
			<h2>Value : {{ 20 }}</h2>
			<h2>Value : {{ 20 | sqrt }}</h2>
		</section>`
})
export class InfoComponent {
	fullName:string = "Ram Kumar";
}
