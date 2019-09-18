(function () {
	//singleton pattern
	function CEO () {
		document.write("Inside CEO constructor!!");	
		document.write("<br/>");

		this.name = 'Lalu Yadav';		
		this.salary = 4500;		
		this.age = 56;	

		this.info = function () {
			document.write(`Name : ${this.name}`);	
			document.write("<br/>");
			document.write(`Salary : ${this.salary}`);		
			document.write("<br/>");
			document.write(`Age : ${this.age}`);		
			document.write("<br/>");
			document.write("==========================");
			document.write("<br/>");
		} //info ends	
	} //CEO ends
	
	if(typeof window.ceo == 'undefined')
		ceo = new CEO(); //singleton pattern
})();