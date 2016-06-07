'use strict';

angular.module('myApp')
.controller('UserInfoController', ["$scope", "$rootScope", "$filter", '$cookies', '$cookieStore', "$location", "$window", "GlobalService", "UserInfoService", function ($scope, $rootScope, $filter, $cookies, $cookieStore, $location, $window, GlobalService, UserInfoService) 
{
	
	
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