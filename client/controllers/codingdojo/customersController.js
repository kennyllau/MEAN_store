myApp.controller('customersController', function($scope, $routeParams, $location, sweatshopFactory, orderFactory){
	sweatshopFactory.getCustomers(function(data){
		$scope.customers = data;
	})
	orderFactory.getOrders(function(data){
		$scope.orders = data;
	});

	$scope.addCustomer = function(newCustomer){
		console.log(newCustomer);
		sweatshopFactory.addCustomer(newCustomer, function(data){
			$scope.customers = data;
			$scope.newCustomer={};
		})
	}

	$scope.removeCustomer = function(customer){
		sweatshopFactory.removeCustomer(customer, function(data){
			$scope.customers = data;
		})
	}
	$scope.showCustomer = function(customerId){
		console.log(customerId);
		$location.path('/customer/' + customerId);
	}
})