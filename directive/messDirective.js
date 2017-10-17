app.directive('anMess',['$state', '$rootScope','$location', function($state,$rootScope,$location){
	return {
		restrict:'E',
		replace: true,
		templateUrl:'./view/layout/messNav.html',
		link:function($scope,$element,$attrs){
			var arr = window.location.href.split('/');
			var arrUrl1 =arr.pop();
			var arrUrl2 =arr.pop();
			arrUrl= arrUrl2 + '.' + arrUrl1;
			function abc(arrUrl){
				switch(arrUrl){
					case "messageNav.message":
						$scope.imgUrl=[
							'image/message60.png',
							'image/user60.png'	
						];
						$scope.liActive=['active-nav',''];
					break;

					case "messageNav.friend":
						$scope.imgUrl=[
						'image/messgae602.png',
						'image/user602.png'	
						];
						$scope.liActive=['','active-nav'];
					break;
					default: 
						$scope.imgUrl=[
							'image/message60.png',
							'image/user60.png'	
						];
						$scope.liActive=['active-nav',''];
					};
			}
			abc(arrUrl);
			$scope.jumps = function(stateName){
					if(stateName != undefined){
						var q = stateName;
						arrUrl = stateName;
						abc(arrUrl);
					}else {
						throw new Error('没有传递参数!').message;
						}
					$state.go(stateName);
			}
		}
	}
}])