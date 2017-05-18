angular.module('zsrchApp', ['angular-loading-bar', 'ngAnimate'])
  .config(function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = true;
  })

  .controller('LoginCntrl', function ($scope, $http, $timeout, cfpLoadingBar) {
    $scope.username ='';
    $scope.password ='';
    $scope.server ='';
    $scope.command ='';
    $scope.isVpars =false;
    $scope.start = function() {
      cfpLoadingBar.start();
    };

    $scope.complete = function () {
      cfpLoadingBar.complete();
    };

    $scope.vmGet = function () {
    		$scope.start();
            var request = $http({
                method: "post",
                url: "vmGet",
                data: {
                	server : $scope.server,
                    username: $scope.username,
                    password: $scope.password,
                },
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            });
            /* Successful HTTP post request or not */
            request.success(function (data) {
          		$scope.complete();
            	$scope.responseMessage = data;
            });
            request.error(function (err) {
            	$scope.complete();
        		$scope.responseMessage = err;
            });
    };
    $scope.vpars = function () {
    		$scope.start();
            var request = $http({
                method: "post",
                url: "vparslogin",
                data: {
                	server : $scope.server,
                    username: $scope.username,
                    password: $scope.password,
                    command : $scope.command
                },
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            });
            /* Successful HTTP post request or not */
            request.success(function (data) {
          		$scope.complete();
            	$scope.responseMessage = data;
            });
            request.error(function (err) {
            	$scope.complete();
        		$scope.responseMessage = err;
            });
    };


  });
