var TW = (function (TW) {
	
	TW.Employee = function (id,uid,name,salary,desig,dept,phone,email,homeAddress,officeAddress) {
		
		TW.Employee.prototype = new TW.Person(uid,name,phone,email,homeAddress);
	
		this.id = id;
		this.salary = salary;
		this.desig = desig;
		this.dept = dept;
		this.officeAddress = officeAddress;
	
		this.info = function () {
			TW.Employee.prototype.info.call(this);
			document.write(`ID : ${this.id}`);
			document.write(`<br/>`);
			document.write(`Salary : ${this.salary}`);
			document.write(`<br/>`);
			document.write(`Desig : ${this.desig}`);
			document.write(`<br/>`);
			document.write(`Dept : ${this.dept}`);
			document.write(`<br/>`);
			document.write(`Office Address`);
			document.write(`<br/>`);
			this.officeAddress.info();
			document.write(`==========================================`);
			document.write(`<br/>`);
		};

		this.updateSalary = function (incrementPercentage) {
			this.salary = this.salary + (this.salary * incrementPercentage);
			document.write(`${this.name} salary is increased to ${this.salary}!!`);
			document.write(`<br/>`);
		}			

		this.applyForLeave = function (days) {
			document.write(`${this.name} applyed for ${days} leave, Granted!!`);
			document.write(`<br/>`);
		}			
	}; //Employee ends
	
	TW.Employee.prototype.updateEmail = function (email) {
		this.email = email;
		document.write(`${this.name} email updated to ${this.email}!!`);
		document.write(`<br/>`);
	};

	TW.Employee.prototype.assignProject = function (projectName) {
		document.write(`${this.name} has been assigned ${projectName} project!!`);
		document.write(`<br/>`);
	}

	return TW;
})(TW || {});

