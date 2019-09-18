var TW = (function (TW) {
	
	TW.Person = function (uid,name,phone,email,address) {

		this.uid = uid;
		this.name = name;
		this.phone = phone;
		this.email = email;
		this.address = address;
	
		this.info = function () {
			document.write(`UID : ${this.uid}`);
			document.write(`<br/>`);
			document.write(`Name : ${this.name}`);
			document.write(`<br/>`);
			document.write(`Phone : ${this.phone}`);
			document.write(`<br/>`);
			document.write(`Email : ${this.email}`);
			document.write(`<br/>`);
			document.write(`Home Address`);
			document.write(`<br/>`);
			this.address.info();
		}			
	};

	return TW;
})(TW || {});

