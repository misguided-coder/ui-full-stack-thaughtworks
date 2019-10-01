import {Component} from "@angular/core";

@Component({
	selector:'app',
	template:`<section>
			<h1>{{title}}</h1>
			<!-- car></car -->
			<movie></movie>
		</section>`
})
export class AppComponent {
	title = 'App Component';
}
