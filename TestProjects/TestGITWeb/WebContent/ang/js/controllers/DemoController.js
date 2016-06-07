'use strict';

angular.module('myApp')
.controller('DemoController',["$scope", "$rootScope", "$filter", '$cookies', '$cookieStore', "$location", "$window", "GlobalService", function ($scope, $rootScope, $filter, $cookies, $cookieStore, $location, $window, GlobalService) 
{
	var thisController = this;
	thisController.title = 'Demo Index';
	
	$scope.fnTTSDemo = function ()
	{
		$location.path('/TTSDemo');
	};
	
		 
}]);