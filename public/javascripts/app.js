var app = angular.module('appModule', ['ngRoute'])
	.config(function($routeProvider) {

	$routeProvider.when('/', {
		templateUrl: '../../views/main.html',
		controller: 'mainController'
	});

	app.controller('appController', ['$scope', function($scope) {

	}]);

});
