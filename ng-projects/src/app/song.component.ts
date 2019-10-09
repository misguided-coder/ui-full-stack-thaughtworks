import { 
  Component,
  Input,
  OnChanges,
  OnInit,
  DoCheck, 
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  SimpleChanges } from "@angular/core";

@Component({
	selector:'song',
	template:`<section>
			<h1>{{title}}</h1>
			<hr/>		
			<h2>{{name}} sung by {{singer}}</h2>	
		</section>`
})
export class SongComponent implements OnChanges,
                                      OnInit,
                                      DoCheck,
                                      AfterContentInit,
                                      AfterContentChecked,
                                      AfterViewInit,
                                      AfterViewChecked,
                                      OnDestroy {

	title = 'Song Component';
	
	@Input()
	name:string;

	@Input()
	singer:string;

	constructor() {
		console.log(`Inside constructor ---- ${this.name}`);
	}

	ngOnChanges(changes:SimpleChanges) {
		console.log(`Inside ngOnChanges ---- ${this.name}`);
		for(let key in changes) {
			console.log(`${key} property changed!!`);
			console.log(`Previous Value : ${changes[key].previousValue}`);
			console.log(`Current Value : ${changes[key].currentValue}`);
		}
	}

	ngOnInit() {
		console.log(`Inside ngOnInit ---- ${this.name}`);
	}

	ngDoCheck() {
		console.log(`Inside ngDoCheck!!`);
	}

	ngAfterContentInit() {
		console.log(`Inside ngAfterContentInit!!`);
	}

	ngAfterContentChecked() {
		console.log(`Inside ngAfterContentChecked!!`);
	}

	ngAfterViewInit() {
		console.log(`Inside ngAfterViewInit!!`);
	}

	ngAfterViewChecked() {
		console.log(`Inside ngAfterViewChecked!!`);
	}

	ngOnDestroy() {
		console.log(`Inside ngOnDestroy !!`);
	}
}
