

var ibm = {}; // namespaces
ibm.entity = {};

//var User = function(inputs) {
ibm.User = function(inputs) {
	if (!inputs) {
		throw new Error("Inputs are required for User");
	}
	if (inputs && typeof(inputs.fname) === 'string') {
		throw new Error("First name should be of type String");	
	}
	var fname = inputs.fname;
	this.getFname = function(){
		console.log(fname);
	};
	this.address = inputs.address;
	this.getFullAddress = function(){
		console.log("Address: "+this.address.street + ", "+this.address.state);
	}
}

//var Address = function(inputs) {
ibm.Address = function(inputs) {
	this.street = inputs.street;
	this.state = inputs.state;
}

var kaustubh = new ibm.User({fname:"Kaustubh"});
kaustubh.address = new ibm.Address({street:"Baner Rd", state:"MH"});

var rupesh = new ibm.User({fname:"Rupesh", address: new ibm.Address({street:"Sinhagad Rd", state:"KA"})});

var testNumber = new ibm.User({fname:1234});


// JSON object
var user = {
	fname: "Kaustubh",
	age: "33",
	walk: function() {
		if (arguments.length!==0) {
			throw new Error("Sorry, zero inputs");
		}
		console.log(this.fname + " is walking");
	}
}

console.log(user.fname);