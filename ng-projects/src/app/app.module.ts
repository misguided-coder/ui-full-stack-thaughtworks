import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

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
import {FunComponent} from "./fun.component";
import {ColorGallaryComponent } from "./color-gallary.component";
import {ColorBoxComponent } from "./color-box.component";
import { CustomerComponent } from "./customer.component";
import { ReactiveComponent } from "./reactive.component";
import { SampleComponent } from "./sample.component";
 




@NgModule({
	imports : [BrowserModule,FormsModule,HttpClientModule],
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
		WeatherComponent,
		FunComponent,
		ColorGallaryComponent,
		ColorBoxComponent,
		CustomerComponent,
		ReactiveComponent,
		SampleComponent
	],
	//bootstrap : [HeaderComponent,AppComponent,FooterComponent]
	bootstrap : [SampleComponent]
})
export class AppModule {

	constructor() {
		console.log("Inside AppModule constructor!!!!");
	}

}
