import { Pipe,PipeTransform } from "@angular/core";

@Pipe({
	name:'sqrt'
})
export class SqrtPipe implements PipeTransform {

	transform(value:number) :number {
		if(!value)
			return 0;

		return value * value;
	}	
}
