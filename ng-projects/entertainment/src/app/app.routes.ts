import {RouterModule,Routes} from "@angular/router";

import {HomeComponent} from "./home.component";
import {NewsComponent} from "./news.component";
import {WeatherComponent} from "./weather.component";
import {CricketComponent} from "./cricket.component";
import {BookComponent} from "./book.component";


const routesArr:Routes = [
		{path:'home',component:HomeComponent},
		{path:'news',component:NewsComponent},
		{path:'weather',component:WeatherComponent},
		{path:'cricket',component:CricketComponent},
		{path:'book/:isbn',component:BookComponent},
		{path:'',redirectTo:'home',pathMatch:'full'}
		//{path:'**',component:404Component}
	];

export const routes = RouterModule.forRoot(routesArr);

