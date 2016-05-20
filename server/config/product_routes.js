var productController = require('./../controllers/products.js')

module.exports = function(app){
	app.get('/products', function(req, res){
		productController.getProducts(req, res);
	});
	app.post('/products', function(req, res){
		productController.addProduct(req, res);
	});
	app.post('/customers/:id/delete', function(req, res){
		console.log('im getting the route');
		productController.destroyProduct(req, res);
	});
	// app.get('/products/:id', function(req, res){
	// 	console.log('getting to show route');
	// 	productController.getProduct(req, res);
	// });
	app.post('/products/:id/update', function(req, res){
		console.log('getting to the update route');
		productController.updateProduct(req, res);
	});
	app.get('/products/dash', function(req, res){
		console.log("serverroutes for 5 products");
		productController.get5Products(req, res);
	});
	
}