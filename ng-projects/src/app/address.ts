export class Address {

	constructor(
		public houseNo:string,
		public society:string,		
		public street:string,
		public city:string = 'Delhi',
		public state:string = 'Delhi',
		public country:string = 'India') {
	}	
}
