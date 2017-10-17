(function () {
//配置懒加载信息
app.config(["$provide", "$compileProvider", "$controllerProvider", "$filterProvider", function ($provide, $compileProvider, $controllerProvider, $filterProvider) {
 app.controller = $controllerProvider.register;
 app.directive = $compileProvider.directive;
 app.filter = $filterProvider.register;
 app.factory = $provide.factory;
 app.service = $provide.service;
 app.constant = $provide.constant;
}])
	.config(["$ocLazyLoadProvider", function ($ocLazyLoadProvider) {
		$ocLazyLoadProvider.config({
	 		debug: false,
	 		events: false,
	 		modules: [
		 		{
		 			name: 'configFooter',
		 			files: [
		 				'./directive/footerDirective.js',
		 				'./assets/css/navButtom.css'
		 				
		 			]
		 		},
		 		{
		 			name:'configMess',
		 			files:[
		 				'./directive/messDirective.js',
		 				'./assets/css/messageNav.css'
		 			]
		 		},
		 		{
		 			name:"configAccount",
		 			files:[
		 				'./assets/css/account.css'
		 			]
		 		},
		 		{
		 			name:"configClassify",
		 			files:[
		 				'./assets/css/classify.css'
		 			]
		 		},
		 		{
		 			name:"configHome",
		 			files:[
		 				'./assets/css/home.css'
		 			]
		 		},
		 		{
		 			name:"configShopping",
		 			files:[
		 				'./assets/css/shopping.css'
		 			]
		 		},
		 		{
		 			name:"configCommodity",
		 			files:[
		 				'./assets/css/commodity.css'
		 			]
		 		},
		 		{
		 			name:"configFriend",
		 			files:[
		 				'./assets/css/friend.css'
		 			]
		 		},
		 		{
		 			name:"configIndent",
		 			files:[
		 				'./assets/css/indent.css'
		 			]
		 		},
		 		{
		 			name:"configRegistern",
		 			files:[
		 				'./assets/css/register.css'
		 			]
		 		},
		 		{
		 			name:"configMessage",
		 			files:[
		 				'./assets/css/message.css'
		 			]
		 		},
		 		{
		 			name:"configSet",
		 			files:[
		 				'./assets/css/set.css'
		 			]
		 		},
		 		{
		 			name:"configSearch",
		 			files:[
		 				'./assets/css/search.css'
		 			]
		 		},
		 		{
		 			name:"configsearchNav",
		 			files:[
		 				'./assets/css/searchNav.css'
		 			]
		 		},
		 		{
		 			name:"configSetaddress",
		 			files:[
		 				'./assets/css/set-address.css'
		 			]
		 		}
	 		]
 		});
	}]);
	
})();