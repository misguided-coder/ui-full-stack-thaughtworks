import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";

import {HelloComponent} from "./hello.component";
import {InfoComponent} from "./info.component";
import {PersonComponent} from "./person.component";

import {AppComponent} from "./app.component";
import {HeaderComponent} from "./header.component";
import {FooterComponent} from "./footer.component";
import {CarComponent} from "./car.component";
import {MovieComponent} from "./movie.component";
import {CityComponent} from "./city.component";
import {CalComponent} from "./cal.component";
import {WeatherComponent} from "./weather.component";
import {DashboardComponent} from "./dashboard.component";



@NgModule({
	imports : [BrowserModule,FormsModule],
	declarations:[
		HeaderComponent,
		FooterComponent,
		MovieComponent,
		CarComponent,
		AppComponent,
		PersonComponent,
		InfoComponent,
		HelloComponent,
		CityComponent,
		CalComponent,
		DashboardComponent,
		WeatherComponent
	],
	//bootstrap : [HeaderComponent,AppComponent,FooterComponent]
	bootstrap : [DashboardComponent]
})
export class AppModule {

	constructor() {
		console.log("Inside AppModule constructor!!!!");
	}

}
