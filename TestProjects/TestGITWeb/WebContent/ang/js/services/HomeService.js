'use strict';
angular.module('myApp').factory('HomeService', [ "$http", function($http) 
{
	var service = {};

	service.GetLogo = function(cust, rateQuoteType, callback) 
	{
		$http.post('/ratestar/rest/common/companyInfo', 
		{
			cust : cust,
			rateQuoteType : rateQuoteType
		})

		.success(function(response) {
			callback(response);
		}, function() {
		});
	};

	return service;

} ]);
