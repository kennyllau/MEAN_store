myApp.factory('sweatshopFactory', function($http){
	var factory = {};
	var customers = [];
	var dashcustomers = [];
	

	factory.getCustomers = function(callback){
		$http.get('/customers').then(function(data){
			customers = data.data;
			callback(data.data);
		});
	}

	factory.addCustomer = function(info, callback){
		$http.post('/customers', info).then(function(data){
			customers.push(data.data);
			callback(customers);
		});
	}

	factory.removeCustomer = function(customer, callback){
		$http.post('/customers/' + customer._id  + '/delete').then(function(data){
			console.log(data);
			customers.splice(customers.indexOf(customer), 1);
			callback(customers);
		});
	}
	factory.getCustomer = function(customerId, callback){
		$http.get('/customers/' + customerId).then(function(data){
			callback(data.data);
		});
	}
	factory.updateCustomer = function( callback){
		$http.post('/customers/' + customer._id + '/update', mongoose).then(function(data){
			customers[customers.indexOf(data.data)] = data.data;
			callback(data);
		});
	}
	factory.get3Customers = function(callback){
		console.log("3 customers in client factory");
		$http.get('/customers/dash').then(function(data){
			dashcustomers = data.data;
			console.log(dashcustomers);
			callback(data.data);
		});
	} 

	return factory;
})