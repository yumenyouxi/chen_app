
	app.controller('rootController',['$scope','$state',function ($scope,$state) {
		$scope.isli=true;
		$scope.toggleUrl=function(){
			$scope.isli=$scope.isli ? false :true;
		}
		$scope.goOther=function(url){
		
			$state.go(url)
		}
	}])