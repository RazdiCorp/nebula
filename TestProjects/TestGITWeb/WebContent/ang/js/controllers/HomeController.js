'use strict';

angular.module('myApp')
.controller('HomeController',["$scope", "$rootScope", "$filter", '$cookies', '$cookieStore', "$location", "$window", "GlobalService", "HomeService", function ($scope, $rootScope, $filter, $cookies, $cookieStore, $location, $window, GlobalService, HomeService) 
{
	var thisController = this;
	thisController.title = 'Home Page';
	
	var path = window.location.href;
		
	
	$rootScope.scrollToAnchor = function (location)
	{
		if(location && angular.element(location))
		{
			$window.scrollTo(0, angular.element(location).offset().top);
		}
		else
		{
			$window.scrollTo(0, 0);
		}
	};
	
		 
}]);