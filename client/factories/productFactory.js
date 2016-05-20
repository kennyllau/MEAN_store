myApp.factory('productFactory', function($http){
	var factory = {};
	var products = [];
	var	dashproducts = [];


	factory.addProduct = function(info, callback){
		console.log(info,"in the client factory");
		$http.post('/products', info).then(function(data){
			products.push(data.data);
			callback(products);
		});
	}

	factory.getProducts = function(callback){
		$http.get('/products').then(function(data){
			products = data.data;
			callback(data.data);
		});
	} 

	// factory.removeProduct = function(product, callback){
	// 	$http.post('/products/' + order._id  + '/delete').then(function(data){
	// 		console.log(data);
	// 		products.splice(products.indexOf(product), 1);
	// 		callback(products);
	// 	});
	// }

	factory.get5Products = function(callback){
		console.log("5 product in client factory");
		$http.get('/products/dash').then(function(data){
			dashproducts = data.data;
			console.log(dashproducts);
			callback(data.data);
		});
	}

	return factory;
})