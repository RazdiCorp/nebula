'use strict'; 

var myApp = angular.module
(		"myApp",
		['ngRoute', 'ngCookies', 'angulartics', 'angulartics.google.analytics', 'ngSanitize']
).config
(
	['$routeProvider', function($routeProvider) 
	  {
			var viewBase = '';
			
			$routeProvider
			.when('/', 
					{
						redirectTo : '/home'
					}
				)
			.when('/home', 
				{
					templateUrl : viewBase + 'common/home.html',
					controller : 'HomeController'
				}
			)
			.when('/UserInfoController', 
				{
					templateUrl : viewBase + 'tts/ttsDemo.html',
					controller : 'UserInfoController'
				}
			)
			.when('/TTSDemo', 
				{
					templateUrl : viewBase + 'tts/ttsDemo.html',
					controller : 'TTSController'
				}
			)
			.otherwise(
				{
					redirectTo : '/home'
				}
			);
		}
	]
);

