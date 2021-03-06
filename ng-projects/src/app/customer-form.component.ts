import {Component} from "@angular/core";
import {FormGroup,FormControl,Validators} from "@angular/forms";

//reactive form/model drivern forms
@Component({
	selector:'app',
	template:`<form [formGroup]='custForm' (ngSubmit)='custForm.valid && formSubmitted(custForm.value);' novalidate>
			<h1>Customer Entry Form</h1>
			<div>
				<label for='firstName'>First Name : </label>
				<input type='text' formControlName='firstName'  /><br/>
				<div class='error' *ngIf="(custForm.controls['firstName'].touched || custForm.controls['firstName'].dirty) &&  custForm.controls['firstName'].invalid">
					<div class='danger' *ngIf="custForm.controls['firstName'].errors.required">First Name is rquired!!</div>				
					<div *ngIf="custForm.controls['firstName'].errors.minlength">First Name should have at least 4 characters!!</div>				
					<div *ngIf="custForm.controls['firstName'].errors.maxlength">First Name can not exceed more then 10 characters!!</div>				
				</div>
			</div>
			<div>
				<label for='lastName'>Last Name : </label>
				<input type='text' formControlName='lastName'  /><br/>
				<div class='error' *ngIf="(custForm.controls['lastName'].touched || custForm.controls['lastName'].dirty) &&  custForm.controls['lastName'].invalid">
					<div class='danger' *ngIf="custForm.controls['lastName'].errors.required">First Name is rquired!!</div>				
					<div *ngIf="custForm.controls['lastName'].errors.minlength">Last Name should have at least 4 characters!!</div>				
					<div *ngIf="custForm.controls['lastName'].errors.maxlength">Last Name can not exceed more then 6 characters!!</div>				
				</div>
			</div>
			<div>
				<label for='email'>Email : </label>
				<input type='text' formControlName='email'  /><br/>
				<div class='error' *ngIf="(custForm.controls['email'].touched || custForm.controls['email'].dirty) &&  custForm.controls['email'].invalid">
					<div class='danger' *ngIf="custForm.controls['email'].errors.required">Email is rquired!!</div>				
					<div *ngIf="custForm.controls['email'].errors.email">Email is not valid!!</div>				
				</div>
			</div>
			<input type='submit' value='Save'  /><br/>
			<hr/>			
			<h1>Form Data : {{custForm.value | json }}</h1>
			<h1>Form Status : {{custForm.status}}</h1>
		</form>`
})
export class CustomerFormComponent {

	//UI model
	custForm:FormGroup;

	//Business model
	customer:Customer = new Customer();
	
	constructor() {
		this.custForm = new FormGroup({
			firstName : new FormControl('',{
				validators : [Validators.required,Validators.minLength(4),Validators.maxLength(10)]
			}),
			lastName : new FormControl('',{
				validators : [Validators.required,Validators.minLength(4),Validators.maxLength(6)]
			}),
			email : new FormControl('',{
				validators : [Validators.required,Validators.email]
			}),
			phone : new FormControl('',{
				validators : [Validators.required,Validators.maxLength(10)]
			})
		});

		this.custForm.patchValue(this.customer);
	}

	formSubmitted(data) {
		console.log(JSON.stringify(data));	
		console.log(JSON.stringify(this.customer));	
	}
}

//Business Models
class Customer {
	constructor(
		public firstName:string = 'Raj',
		public lastName:string = 'Malhotra',
		public email:string = 'raj@gmail.com',
		public phone:string = '981000000',
	){}	
}

