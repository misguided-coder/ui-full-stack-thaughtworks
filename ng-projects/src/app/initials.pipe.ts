import { Pipe,PipeTransform } from "@angular/core";

@Pipe({
	name:'initials'
})
export class InitialsPipe implements PipeTransform {

	transform(name:string,title:string) :string {
		if(!title)
			title = '';
		if(!name)
			name = '';
		
		return `${title} ${name}`;
	}	
}
