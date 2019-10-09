import { Pipe,PipeTransform } from "@angular/core";

@Pipe({
	name:'filterByName'
})
export class CarFilterPipe implements PipeTransform {

	transform(cars:string[],searchText:string) :string[] {
		if(!cars)
			return [];
		if(!searchText)
			return cars;
		return cars.filter((car)=>{
			return car.toLowerCase().includes(searchText.toLowerCase());
		});
	
	}	
}
