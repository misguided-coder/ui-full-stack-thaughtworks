import {Component,OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";


@Component({
	selector:'app',
	template:`<section>
			<h1>{{title}}</h1>
			<hr/>
			<table>
			<tbody>
			<tr *ngFor='let customer of customers'>
				<td>{{customer.id}}</td>
				<td>{{customer.name}}</td>
				<td>{{customer.phone}}</td>
				<td>{{customer.email}}</td>
				<td>{{customer.address.society}}</td>
				<td>{{customer.address.city}}</td>
			</tr>
			</tbody>
			</table>
			
		</section>`
})
export class SampleComponent implements OnInit {

	title = 'Customer Details';
	customerAPI = 'http://localhost:5000/api/customers';
	customers:Customer[];

	constructor(private http:HttpClient) {
		console.log("Inside SampleComponent constructor!!");
	}

	ngOnInit() {
		console.log("Inside SampleComponent  ngOnInit!!");	
		//obervable returning customer array	
		this.http.get<Customer[]>(this.customerAPI)
		   .subscribe((res)=>{
		      this.customers = res;
    		   });	
	}

}


//model representing customer entity
class Customer {
	constructor(
		private id:number,
		private name:string,
		private phone:number,
		private email:string,
		private address:Address
	){}
}

//model representing customer address
class Address {
	constructor(
		private houseNo:string,
		private society:string,
		private street:string,
		private city:string,
		private state:string,
		private country:string
	){}
}

