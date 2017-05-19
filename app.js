var app = angular.module("myApp" , []);




app.run(["AppVersion", function(AppVersion) {
	console.log("this is run :" + AppVersion)
}])

app.controller("myController", ["$scope", 
	                            "customFactory",
	                            "AppName", 
	                            "AppVersion",
	                            function($scope,customFactory,AppName,AppVersion) {
									$scope.customFactoryService = customFactory
									$scope.constant = AppVersion;
									console.log(AppVersion)
								}])
