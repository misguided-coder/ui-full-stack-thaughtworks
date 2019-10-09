import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";

import { routes } from "./app.routes";

import {AppComponent} from "./app.component";
import {HomeComponent} from "./home.component";
import {NewsComponent} from "./news.component";
import {WeatherComponent} from "./weather.component";
import {CricketComponent} from "./cricket.component";
import {BookComponent} from "./book.component";

@NgModule({
	imports : [
		routes,
		BrowserModule,
		FormsModule],
	declarations:[
		AppComponent,
		HomeComponent,
		WeatherComponent,
		NewsComponent,
		CricketComponent,
		BookComponent
	],
	bootstrap : [AppComponent]
})
export class AppModule {

	constructor() {
		console.log("Inside AppModule constructor!!!");
	}

}
