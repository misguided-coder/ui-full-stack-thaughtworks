import {Component} from "@angular/core";

@Component({
	selector : 'page-header',
	template: `<header class='header'>
			<h1 class='header__title'>Holiday Planner Application</h1>
		</header>`,
	styles : [`

		.header {
			color : white;
			background-color : black;
		}

		.header__title {
			text-align : center;
			font-size: 2.4em;
			line-height:1.2em;
		}
	`]
})
export class HeaderComponent {
}
