var orderController = require('./../controllers/orders.js')


module.exports = function(app){

	app.get('/orders', function(req, res){
		orderController.getOrders(req, res);
	});
	app.post('/orders', function(req, res){
		console.log(req.body,"in the server controller");
		orderController.addOrder(req, res);
	});
	app.post('/orders/:id/delete', function(req, res){
		console.log('im getting the route');
		orderController.destroyOrder(req, res);
	});
	// app.get('/orders/:id', function(req, res){
	// 	console.log('getting to show route');
	// 	orderController.getOrder(req, res);
	// });
	app.post('/orders/:id/update', function(req, res){
		console.log('getting to the update route');
		orderController.updateOrder(req, res);
	});
	app.get('/orders/dash', function(req, res){
		console.log("getting 3 orders in server");
		orderController.get3Orders(req, res);
	});

	
}