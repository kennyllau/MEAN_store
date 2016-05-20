myApp.controller('productsController', function($scope, $routeParams, $location, productFactory){
	
	productFactory.getProducts(function(data){
		$scope.products = data;
	});


	$scope.addProduct = function(newProduct){	
		console.log(newProduct,"in client controller with product");
		productFactory.addProduct(newProduct, function(data){
			$scope.products = data;
			$scope.newProduct={};
		})
	}

	$scope.removeProduct = function(item){
		productFactory.removeProduct(item, function(data){
			$scope.products = data;
		})
	}
})