import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";


@Component({
	selector:'weather',
	template:`<section>
			<h1>{{title}}</h1>
			<h3>ISBN : {{book.isbn}}</h3>
			<h3>Title : {{book.title}}</h3>
			<h3>Price : {{book.price}}</h3>
		</section>`
})
export class BookComponent {
	title = 'Book Details';
	book:any =  {isbn:1000,title:'Learn Java',price:120.00}; 	
	
	books:any[] = [
		{isbn:1001,title:'Learn Java',price:120.00},
		{isbn:1002,title:'Learn Scala',price:500.00},
		{isbn:1003,title:'Learn Groovy',price:820.00}
	];
		
	constructor(private activeRoute:ActivatedRoute) {
		console.log("Inside BookComponent constructor!!!");
		this.activeRoute.paramMap.subscribe((parms)=>{
			let isbn = parms.get('isbn');
			let filteredBooks = this.books.filter((item)=>{
				return item.isbn == isbn;
			});	
			this.book = filteredBooks[0];
		});	

		
	}
	
	
}
