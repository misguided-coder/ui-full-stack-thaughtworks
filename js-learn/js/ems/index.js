var TW = (function (TW) {
	
	var home = new TW.Address(81,'MG Road','Vatika City','Gurguram','HR');
	var office = new TW.Address(211,'Sohana Road','JMD Megapolis','Gurguram','HR');

	var e1 = new TW.Employee(100,'1000-1234','Jaggu',750000.00,'SE','SW',981000000,'jaggu@yahoo.com',home,office);
	var e2 = new TW.Employee(101,'1000-1235','Pintu',850000.00,'SE','SW',981000000,'jaggu@yahoo.com',home,office);
	var e3 = new TW.Employee(102,'1000-1236','Chandu',40000.00,'SE','SW',981000000,'jaggu@yahoo.com',home,office);

	e1.info();
	e2.info();
	e3.info();

	e1.updateSalary(.50);
	e1.updateEmail('jaggu@gmail.com');
	e1.assignProject('Core Banking');
	e1.applyForLeave(500);

	
	TW.payroll.hra.call(e1);
	TW.payroll.hra.call(e2);
	TW.payroll.hra.call(e3);

	TW.payroll.da.call(e1);
	TW.payroll.da.call(e2);
	TW.payroll.da.call(e3);

	TW.payroll.ta.call(e1);
	TW.payroll.ta.call(e2);
	TW.payroll.ta.call(e3);
	
	return TW;
})(TW || {});

