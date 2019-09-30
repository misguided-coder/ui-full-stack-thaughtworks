import {Component} from "@angular/core";

@Component({
	selector :'app',
	template :'<section><h2>Name : {{name}}</h2><h2>Phone : {{phone}}</h2></section>'
})
export class DetailComponent {
	
	name = "Jaggu";	
	phone = "981000000";
}
