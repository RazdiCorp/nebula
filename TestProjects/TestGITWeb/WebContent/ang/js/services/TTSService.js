'use strict';
angular.module('myApp').factory('TTSService', [ "$http", "AppConfig", function($http, AppConfig) 
{
	var service = {};

	
	/*
	 * fnCallTTSService
	 */
	service.fnCallTwilioService = function
	(
		requestObject,
		callbackSuccess,
		callbackError
	)
	{
		$http.post
		(
			'/RajeshWeb/TTSProcessor?event=twilioService',
			{
				requestObject : requestObject
			},
			{timeout: AppConfig.SERVICE_TIMEOUT}
		)
		.success(callbackSuccess)
		.error(callbackError);
		
	};
	
	/*
	 * fnCallTTSService
	 */
	service.fnCallTTSService = function
	(
		requestObject,
		callbackSuccess,
		callbackError
	)
	{
		
		//Changing the content type from the default value of application/json
//		$http(
//			{
//				method : 'POST',
//				url : '/RajeshWeb/TTSProcessor?event=textToSpeech',
//				data : 'a=b&c=d',
//				headers : {'Content-Type' : 'application/x-www-form-urlencoded'}
//			}
//		).then(
//				callbackSuccess(result),
//				callbackError(result)
//		);
		
		
		$http.post
		(
			'/RajeshWeb/TTSProcessor?event=ttsService',
			{
				requestObject : requestObject
			},
			{timeout: AppConfig.SERVICE_TIMEOUT}
			
		)
		.success(callbackSuccess)
		.error(callbackError);
		
	};
	
	
	/*
	 * fnEmailAudio
	 */
	service.fnEmailAudio = function
	(
		requestObject, 
		callbackSuccess, 
		callbackError
	)
	{
		$http.post
		(
			'/RajeshWeb/TTSProcessor?event=emailAudio',
			{
				requestObject : requestObject
			},
			{timeout: AppConfig.SERVICE_TIMEOUT}
			
		)
		.success(callbackSuccess)
		.error(callbackError);
		
	};

	return service;

} ]);
