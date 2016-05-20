var myApp = angular.module('Myapp', ['ngRoute']);

(function(){
	myApp.config(function($routeProvider){
		$routeProvider
			.when('/',
			{
				controller: 'dashController',
				templateUrl: "partials/client_page/index.html"
			})
			.when('/customers', 
			{
				controller: 'customersController',
				templateUrl: "partials/client_page/customer.html"
			})
			.when('/orders',{
				controller: 'ordersController',
				templateUrl: "partials/client_page/orders.html"
			})
			.when('/products',{
				controller: 'productsController',
				templateUrl: "partials/client_page/products.html"
			})
			.when('/settings',{
				controller: 'settingsController',
				templateUrl: "partials/client_page/setting.html"
			})
			.when('/customers/:id',{
				controller: 'ordersController',
				templateUrl: "partials/client_page/show.html"
			})
			.when('/mongoose/:id/edit', {
				controller: 'mEditController',
				templateUrl: "partials/client_page/edit.html"
			})
			.otherwise({
				redirectTo: "/"
			})
	})
}());