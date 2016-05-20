myApp.controller('dashController', function($scope, $routeParams, $location, orderFactory, sweatshopFactory, productFactory){
	
	orderFactory.getOrders(function(data){
		$scope.orders = data;
	});

	sweatshopFactory.getCustomers(function(data){
		$scope.customers = data;
	});

	productFactory.getProducts(function(data){
		$scope.products = data;
	});

	productFactory.get5Products(function(data){
		console.log("5 products in dashcontroller");
		$scope.get5Products =data;
	});

	orderFactory.get3Orders(function(data){
		console.log("3 orders in dashcontroller");
		$scope.get3Orders =data;
	});

	sweatshopFactory.get3Customers(function(data){
		console.log("3 customers in dashcontroller");
		$scope.get3Customers =data;
	})

})