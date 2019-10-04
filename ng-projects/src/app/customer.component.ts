import {Component} from "@angular/core";

@Component({
	selector:'app',
	template:`<section>
			<h2>Name : Raj</h2>
			<h2>Name : {{ 'Raj' }}</h2>
			<h2>Name : {{ 'hello how are you' | titlecase }}</h2>
			<h2>Name : {{ 'Raj' | lowercase }}</h2>
			<h2>Name : {{ 'Raj' | uppercase }}</h2>
			<h2>Name : {{ 'Raj Chaudhary' | slice:4:8 }}</h2>
			<h2>Phone : 98120000</h2>
			<h2>Name : {{ name }}</h2>
			<h2>Name : {{ name | titlecase }}</h2>
			<h2>DOB : {{ dob }}</h2>
			<h2>DOB : {{ dob | date}}</h2>
			<h2>DOB : {{ dob | date:'mediumDate' }}</h2>
			<h2>DOB : {{ dob | date:'smallDate' }}</h2>
			<h2>DOB : {{ dob | date:'longDate' }}</h2>
			<h2>DOB : {{ dob | date:'fullDate' }}</h2>
			<h2>DOB : {{ dob | date:'dd-MM-yyyy' }}</h2>
			<h2>DOB : {{ dob | date:'MM-dd-yyyy' }}</h2>
			<h2>DOB : {{ dob | date:'MM/dd/yyyy' }}</h2>
			<h2>DOB : {{ dob | date:'mediumDate' }}</h2>
			<h2>Salary : {{ salary }}</h2>
			<h2>Salary : {{ salary | number }}</h2>
			<h2>Salary : {{ salary | currency:'GBP' }}</h2>
			<h2>Salary : {{ salary | percent }}</h2>
			<h2>Salary : {{ 045.0056 | percent }}</h2>
			<h2>Car: {{ car }}</h2>
			<h2>Car: {{ car | json | uppercase }}</h2>
	  </section>`
})
export class CustomerComponent {
	
	name:string = 'ram kumar';
	dob = new Date();
	salary:number = 890000;
 	car = {vin:100,model:'X1',make:'BMW'};
	
}
