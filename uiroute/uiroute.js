
	app.config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider) {

		$urlRouterProvider.otherwise('/lead1');

		$stateProvider
				// 导航
			.state('lead1',{
				url:'/lead1',
				templateUrl:'./view/lead1.html'
			})
			.state('lead2',{
				url:'/lead2',
				templateUrl:'./view/lead2.html'
			})
			.state('lead3',{
				url:'/lead3',
				templateUrl:'./view/lead3.html'
			})
			.state('lead4',{
				url:'/lead4',
				templateUrl:'./view/lead4.html'
			})
				// 登录和注册
			.state('login',{
				url:'/login',
				templateUrl:'./view/login.html',
				
			})
			.state('register',{
				url:'/register',
				templateUrl:'./view/register.html',
				resolve:{
					des:['$ocLazyLoad',function($ocLazyLoad){
						return $ocLazyLoad.load('configRegistern')
					}]
				}
			})
				// 共有下导航条的大佬
			.state('footer',{
				url:'',
				abstract:true,
				templateUrl:'./view/footer.html',
				resolve:{
					des:['$ocLazyLoad',function($ocLazyLoad){
						return $ocLazyLoad.load('configFooter')
					}]
				}
			})
			.state('footer.home',{
				url:'/footer/home',
				templateUrl:'./view/home.html',
				resolve:{
					des:['$ocLazyLoad',function($ocLazyLoad){
						return $ocLazyLoad.load('configHome')
					}]
				}
			})
			.state('footer.classify',{
				url:'/footer/classify',
				templateUrl:'./view/classify.html',
				resolve:{
					des:['$ocLazyLoad',function($ocLazyLoad){
						return $ocLazyLoad.load('configClassify')
					}]
				}

			})
			.state('footer.productList',{
				url:'/footer/productList',
				templateUrl:'./view/productList.html',

			})
			.state('footer.shopping',{
				url:'/footer/shopping',
				templateUrl:'./view/shopping.html',
				resolve:{
					des:['$ocLazyLoad',function($ocLazyLoad){
						return $ocLazyLoad.load('configShopping')
					}]
				}
			})
			.state('footer.account',{
				url:'/footer/account',
				templateUrl:'./view/account.html',
				resolve:{
					des:['$ocLazyLoad',function($ocLazyLoad){
						return $ocLazyLoad.load('configAccount')
					}]
				}
			})
				// 赚钱的订单
			.state('indent',{
				url:'/indent',
				templateUrl:'./view/indent.html',
				resolve:{
					des:['$ocLazyLoad',function($ocLazyLoad){
						return $ocLazyLoad.load('configIndent')
					}]
				}
			})
				// 搜索好东西
			.state('searchNav',{
				url:'',
				abstract:true,
				templateUrl:'./view/searchNav.html',
				resolve:{
					des:['$ocLazyLoad',function($ocLazyLoad){
						return $ocLazyLoad.load('configsearchNav')
					}]
				}
			})
			.state('searchNav.search',{
				url:'/searchNav/search',
				templateUrl:'./view/search.html',
				resolve:{
					des:['$ocLazyLoad',function($ocLazyLoad){
						return $ocLazyLoad.load('configSearch')
					}]
				}
			})
			.state('searchNav.search-results',{
				url:'/searchNav/search-results',
				templateUrl:'./view/search-results.html'
			})
				// 个性设置
			.state('set-up',{
				url:'/set',
				templateUrl:'./view/set-up.html'
			})
			.state('set',{
				url:'/set',
				templateUrl:'./view/set.html',
				resolve:{
					des:['$ocLazyLoad',function($ocLazyLoad){
						return $ocLazyLoad.load('configSet')
					}]
				}
			})
			.state('set-address',{
				url:'/set-address',
				templateUrl:'./view/set-address.html',
				resolve:{
					des:['$ocLazyLoad',function($ocLazyLoad){
						return $ocLazyLoad.load('configSetaddress')
					}]
				}
			})
			   // 商品的好
			.state('commodity',{
				url:'/commodity',
				templateUrl:'./view/commodity.html',
				resolve:{
					des:['$ocLazyLoad',function($ocLazyLoad){
						return $ocLazyLoad.load('configCommodity')
					}]
				}
			})

				// 信息与交友
			.state('messageNav',{
				url:'',
				abstract:true,
				templateUrl:'./view/messageNav.html',
				resolve:{
					des:['$ocLazyLoad',function($ocLazyLoad){
						return $ocLazyLoad.load('configMess')
					}]
				}
			})
			.state('messageNav.message',{
				url:'/messageNav/message',
				templateUrl:'./view/message.html',
				resolve:{
					des:['$ocLazyLoad',function($ocLazyLoad){
						return $ocLazyLoad.load('configMessage')
					}]
				}
			})
			.state('messageNav.friend',{
				url:'/messageNav/friend',
				templateUrl:'./view/friend.html',
				resolve:{
					des:['$ocLazyLoad',function($ocLazyLoad){
						return $ocLazyLoad.load('configFriend')
					}]
				}
			})
	}]);