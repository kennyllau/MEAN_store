myApp.factory('orderFactory', function($http){
	var factory = {};
	var orders = [];
	var dashorders = [];

	factory.addOrder = function(info, callback){
		console.log(info, "orderfactory where is the id?!");
		$http.post('/orders', info).then(function(data){
			orders.push(data.data);
			callback(orders);
		});
	}

	factory.getOrders = function(callback){
		$http.get('/orders').then(function(data){
			orders = data.data;
			callback(data.data);
		});
	} 

	factory.removeOrder = function(order, callback){
		$http.post('/orders/' + order._id  + '/delete').then(function(data){
			console.log(data);
			orders.splice(orders.indexOf(order), 1);
			callback(orders);
		});
	}

	factory.get3Orders = function(callback){
		console.log("3 orders in client factory");
		$http.get('/orders/dash').then(function(data){
			dashorders = data.data;
			console.log(dashorders);
			callback(data.data);
		});
	}

	return factory;
})