myApp.controller('ordersController', function($scope, $routeParams, $location, orderFactory, sweatshopFactory, productFactory){
	orderFactory.getOrders(function(data){
		$scope.orders = data;
	});

	sweatshopFactory.getCustomers(function(data){
		$scope.customers = data;
	});

	productFactory.getProducts(function(data){
		$scope.products = data;
	});

	$scope.addOrder = function(newOrder, products){	
		// console.log(newOrder);
		// console.log(products);
		// for(var i=0; i < products.length; i++){
		// 	if(products[i].productname == newOrder.item){
		// 		var newOrder={
		// 			id: products[0]._id,
		// 			name: newOrder.name,
		// 			quantity: newOrder.quantity,
		// 			item: newOrder.item }
		// 		return newOrder;

		// 	}
			orderFactory.addOrder(newOrder, function(data){
				$scope.orders = data;
				$scope.newOrder={};
			});	
		


	}

	$scope.removeOrder = function(order){
		orderFactory.removeOrder(order, function(data){
			$scope.orders = data;
		})
	}
})