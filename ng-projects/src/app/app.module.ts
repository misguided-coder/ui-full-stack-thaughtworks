import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

import {HelloComponent} from "./hello.component";
import {InfoComponent} from "./info.component";
import {DetailComponent} from "./detail.component";

@NgModule({
	imports : [BrowserModule],
	declarations:[DetailComponent,InfoComponent,HelloComponent],
	bootstrap : [DetailComponent]
})
export class AppModule {

}
