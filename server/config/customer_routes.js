var customerController = require('./../controllers/customers.js')


module.exports = function(app){
	app.get('/customers', function(req, res){
		customerController.getCustomers(req, res);
	});
	app.post('/customers', function(req, res){
		customerController.addCustomer(req, res);
	});
	app.post('/customers/:id/delete', function(req, res){
		console.log('im getting the route');
		customerController.destroyCustomer(req, res);
	});
	// app.get('/customers/:id', function(req, res){
	// 	console.log('getting to show route');
	// 	customerController.getCustomer(req, res);
	// });
	app.post('/customers/:id/update', function(req, res){
		console.log('getting to the update route');
		customerController.updateCustomer(req, res);
	});

	app.get('/customers/dash', function(req, res){
		customerController.get3Customers(req, res);
	});
	
}