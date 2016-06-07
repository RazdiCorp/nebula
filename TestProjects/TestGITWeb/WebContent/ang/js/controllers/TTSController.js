'use strict';
  
angular.module('myApp')  
.controller('TTSController',["$scope", "$rootScope", '$cookies', '$cookieStore', '$filter', "$location", "$window", "AppConfig", "GlobalService", "TTSService", function ($scope, $rootScope, $cookies, $cookieStore, $filter, $location, $window, AppConfig, GlobalService, TTSService) 
{
	//Scroll to top of the page
	//GlobalService.scrollToAnchor();
	initialize();
	
	//Create empty request object
	var requestObject = {};
	
	//Can be moved to global service
	$scope.fnHandleError = function (response)
	{
		alert('Error :' + response);
	}
	
	$scope.fnHandleTwilioResponse = function (response)
	{
		alert('Status : ' + response.dataMap.statusCode + '\n Message : ' + response.messagesMap.INFO[0]);
	}
	
	$scope.fnHandleTTSResponse = function (response)
	{
		$scope.showPlayer= true;
		$scope.audioSource = response.dataMap.audioSource;
		$scope.showPlayer= true;
		
//		alert($scope.audioSource);
		
		if(audTTSPlayer.src == '')
		{
			audTTSPlayer.src = response.audioSource;
		}
		
		$scope.showPlayer= true;
	}
	
		
	$scope.fnCallTwilioService = function ()
	{
		requestObject.textToConvert = $scope.txtSpeechSynthText;
		requestObject.twilioService = $scope.twilioService;
		
		requestObject.phoneNo = $scope.txtPhoneNo;
		requestObject.emailId = $scope.txtEmailAudio;
		requestObject.mmsMediaURL = $scope.txtMMSMediaURL;
		
		
		if($scope.txtPhoneNo != null && $scope.txtPhoneNo.length >= 10)
		{
			TTSService.fnCallTwilioService(		
				requestObject,
				$scope.fnHandleTwilioResponse,
				$scope.fnHandleError
			);
		}
		else
		{
			alert('Please enter a valid phone no.');
		}
	};
	
	$scope.fnCallTTSService = function ()
	{
		var audTTSPlayer = document.getElementById("audTTSPlayer");
		
//		var audio = new Audio('http://localhost:8080/RajeshWeb/audio/27 - Mitwa - Instrumental.mp3');
//		audio.play();
		
		requestObject.ttsEngine = $scope.ttsEngine;
		requestObject.textToConvert = $scope.txtSpeechSynthText
		
		
		if(document.getElementById("chkEmail").checked)
		{
			requestObject.emailId = $scope.txtEmailAudio;
		}
			
			
			TTSService.fnCallTTSService(
				requestObject,
				$scope.fnHandleTTSResponse,
				$scope.fnHandleError
			);
		};
	
	
	$scope.fnEmailAudio = function ()
	{
		var elemTextBox = document.getElementById("txtEmailAudio");
		var emailId = elemTextBox.value;
		
		
		TTSService.fnEmailAudio(
				$scope.ttsEngine, 
				$scope.textToConvert,
				function(response)
				{
					alert('email sent');
				},
				function (response)
				{
					alert('Error :' + response);
				}
		);
		
	}
	
	$scope.fnValidateEmail = function ()
	{
		var elemTextBox = document.getElementById("txtEmailAudio")
		var elemChkBox = document.getElementById("chkEmail");
		;
		var emailId = elemTextBox.value;
	
		if(elemChkBox.checked && emailId != null && emailId != '')	
	{
				if(emailId != '' && isValidEmail(emailId))	
		{	
			$scope.disableEmailButton = false;	
		}	
		else	
		{	
			alert('Please enter a valid email.');	
		
		}}
	}
	
	function isValidEmail(email)
	{
		var reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
		
		if (reg.test(email))
		{
			return true; 
		}
		else
		{
			return false;
		}
	};
	
	function initialize()
	{
		$scope.audioSource = "";
		$scope.showPlayer= false;
		$scope.ttsEngine = "FREE_TTS"
		$scope.txtEmailAudio = "rsingh@archmi.com";;
		
		$scope.twilioService = "TWILIO_VOICE_MSG";
		$scope.txtPhoneNo = "19253544653";
		$scope.txtMMSMediaURL = "http://www.eyeofdubai.net/includes/image.php?image=/news_images/2014/11/235618312.jpg&width=500&height=300";
		
		$scope.disableEmailButton = true;
	}
	
			
}]);


