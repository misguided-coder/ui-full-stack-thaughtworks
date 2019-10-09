import { Directive,ElementRef } from "@angular/core";

@Directive ({
	selector:'[box]',
})
export class BoxDirective {
	
	constructor(elementRef:ElementRef) {
		elementRef.nativeElement.style.border = '2px solid blue';
		elementRef.nativeElement.style.width = '100px';
		elementRef.nativeElement.style.height = '100px';
	}	

}
