	// create the module and name it scotchApp
	var holisApp = angular.module('holisApp', ['ngRoute']);

	// configure our routes
	holisApp.config(function($routeProvider, $locationProvider) {
		$routeProvider

		.when('/', { templateUrl : 'pages/home.html' })
		.when('/team', { templateUrl : 'pages/team.html' })
		.when('/idea', { templateUrl : 'pages/idea.html' })
		.when('/vision', { templateUrl : 'pages/vision.html' })
		.when('/way', { templateUrl : 'pages/way.html' })
		.when('/box', { templateUrl : 'pages/box.html' })
		.when('/services', { templateUrl : 'pages/services.html' })
		.when('/12or3', { templateUrl : 'pages/12or3.html' })
		.when('/holispedia', { templateUrl : 'pages/holispedia.html' })
		.when('/myholis', { templateUrl : 'pages/myholis.html' })
		.when('/testimonials', { templateUrl : 'pages/testimonials.html' })
		.when('/getsupplier', { templateUrl : 'pages/getsupplier.html' })
		.when('/team-belinda', { templateUrl : 'pages/team-belinda.html' })
		.when('/team-sarah', { templateUrl : 'pages/team-sarah.html' })
		.when('/team-sonja', { templateUrl : 'pages/team-sonja.html' })
		.when('/team-franz', { templateUrl : 'pages/team-franz.html' })
		.when('/team-bernhard', { templateUrl : 'pages/team-bernhard.html' })
		.when('/team-sabrina', { templateUrl : 'pages/team-sabrina.html' })
		.when('/testimonial-eipeltauer', { templateUrl : 'pages/testimonials/testimonial-eipeltauer.html' })
		
		;
		// use the HTML5 History API
		//$locationProvider.html5Mode(true);
	});

	holisApp.run(['$rootScope', function($rootScope){

		function isHomepage(current){
		    return current.$$route.originalPath == "/" || current.$$route.originalPath == "";
		}

		$rootScope.$on('$routeChangeSuccess', function(event, current, previous){
			$rootScope.startpage = isHomepage(current);
		});
}]);