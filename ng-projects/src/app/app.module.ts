import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
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
import { CustomerFormComponent } from "./customer-form.component";
import { SongComponent } from "./song.component";
import { SongListComponent } from "./song-list.component";
import { CarListComponent } from "./car-list.component";

//Application specific pipes
import { InitialsPipe } from "./initials.pipe";
import { SqrtPipe } from "./sqrt.pipe";
import { CarFilterPipe } from "./car-filter.pipe";

//Application specific directives
import { BoxDirective } from "./box.directive";
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { EchoPipe } from './echo.pipe';

@NgModule({
	imports : [BrowserModule,FormsModule,ReactiveFormsModule,HttpClientModule],
	declarations:[
		BoxDirective, 
		InitialsPipe,
		SqrtPipe,
		CarFilterPipe,
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
		SampleComponent,
		CustomerFormComponent,
		SongComponent,
		SongListComponent,
		CarListComponent,
		CustomerHomeComponent,
		EchoPipe 
	],
	//bootstrap : [HeaderComponent,AppComponent,FooterComponent]
	bootstrap : [ CustomerFormComponent  ]
})
export class AppModule {

	constructor() {
		console.log("Inside AppModule constructor!!!!");
	}

}
