app.directive('anFooter',[ '$state', '$rootScope','$location', function($state,$rootScope,$location){
	return {
		restrict:"E",
		replace: true,
		templateUrl:'./view/layout/footer2.html',
		link:function($scope,$element,$attrs){
			var arr = window.location.href.split('/');
			var arrUrl1 =arr.pop();
			var arrUrl2 =arr.pop();
			arrUrl= arrUrl2 + '.' + arrUrl1;
			function abc(arrUrl){
					switch(arrUrl){
						case "footer.home":
							$scope.imgUrl=[
								'image/house-active.png',
								'image/list.png',
								'image/big-shopping.png',
								'image/user.png'	
							];
							$scope.liActive=['active-nav','','',''];
				
						break;

						case "footer.classify":
							$scope.imgUrl=[
							'image/house.png',
							'image/list-active.png',
							'image/big-shopping.png',
							'image/user.png'	

							];
							$scope.liActive=['','active-nav','',''];
				
						break;

						case "footer.productList":
							$scope.imgUrl=[
							'image/house.png',
							'image/list-active.png',
							'image/big-shopping.png',
							'image/user.png'	

							];
							$scope.liActive=['','active-nav','',''];
							
						break;

						case "footer.shopping":
							$scope.imgUrl=[
							'image/house.png',
							'image/list.png',
							'image/shopping-active.png',
							'image/user.png'	

							];
							$scope.liActive=['','','active-nav',''];
							
						break;

						case "footer.account":
							$scope.imgUrl=[
							'image/house.png',
							'image/list.png',
							'image/big-shopping.png',
							'image/user-active.png'	

							];
							$scope.liActive=['','','','active-nav'];
							
						break;

						default: 
						$scope.imgUrl=[
						'image/house-active.png',
						'image/list.png',
						'image/big-shopping.png',
						'image/user.png'	

						];
						$scope.liActive=['active-nav','','', ''];	
					}
			}
			abc(arrUrl);
			$scope.jump = function(stateName){

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
	};
}])