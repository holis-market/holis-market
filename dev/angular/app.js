	// create the module and name it scotchApp
	var holisApp = angular.module('holisApp', ['ngRoute']);

	// configure our routes
	holisApp.config(function($routeProvider, $locationProvider) {
		$routeProvider

		.when('/', { templateUrl : 'pages/home.html' })
		.when('/news', { templateUrl : 'pages/news.html' })
		.when('/team', { templateUrl : 'pages/team.html' })
		.when('/faq', { templateUrl : 'pages/faq.html' })
		.when('/partner', { templateUrl : 'pages/partner.html' })
		.when('/idea', { templateUrl : 'pages/idea.html' })
		.when('/vision', { templateUrl : 'pages/vision.html' })
		.when('/way', { templateUrl : 'pages/way.html' })
		.when('/box', { templateUrl : 'pages/box.html' })
		.when('/services', { templateUrl : 'pages/services.html' })
		.when('/12or3', { templateUrl : 'pages/12or3.html' })
		.when('/holispedia', { templateUrl : 'pages/holispedia.html' })
		.when('/myholis', { templateUrl : 'pages/myholis.html' })
		.when('/testimonials', { templateUrl : 'pages/testimonials.html' })
		.when('/supplier', { templateUrl : 'pages/supplier.html' })
		.when('/team-belinda', { templateUrl : 'pages/team-belinda.html' })
		.when('/team-sarah', { templateUrl : 'pages/team-sarah.html' })
		.when('/team-sonja', { templateUrl : 'pages/team-sonja.html' })
		.when('/team-franz', { templateUrl : 'pages/team-franz.html' })
		.when('/team-bernhard', { templateUrl : 'pages/team-bernhard.html' })
		.when('/team-sabrina', { templateUrl : 'pages/team-sabrina.html' })
		.when('/testimonial-eipeltauer', { templateUrl : 'pages/testimonials/testimonial-eipeltauer.html' })
		.when('/testimonial-seyr', { templateUrl : 'pages/testimonials/testimonial-seyr.html' })
		.when('/testimonial-reisinger', { templateUrl : 'pages/testimonials/testimonial-reisinger.html' })
		.when('/testimonial-leplay', { templateUrl : 'pages/testimonials/testimonial-leplay.html' })
		.when('/testimonial-rosemanna', { templateUrl : 'pages/testimonials/testimonial-rosemanna.html' })
		.when('/testimonial-kivrak', { templateUrl : 'pages/testimonials/testimonial-kivrak.html' })
		.when('/testimonial-ortner', { templateUrl : 'pages/testimonials/testimonial-ortner.html' })
		.when('/testimonial-furdea', { templateUrl : 'pages/testimonials/testimonial-furdea.html' })
		.when('/testimonial-gruenzweil', { templateUrl : 'pages/testimonials/testimonial-gruenzweil.html' })
		.when('/testimonial-reitmayr', { templateUrl : 'pages/testimonials/testimonial-reitmayr.html' })
		.when('/testimonial-brandstaetter', { templateUrl : 'pages/testimonials/testimonial-brandstaetter.html' })
		.when('/testimonial-frischefritzen', { templateUrl : 'pages/testimonials/testimonial-frischefritzen.html' })
		.when('/testimonial-gin', { templateUrl : 'pages/testimonials/testimonial-gin.html' })
		.when('/testimonial-mayr', { templateUrl : 'pages/testimonials/testimonial-mayr.html' })
		.when('/testimonial-kollmann', { templateUrl : 'pages/testimonials/testimonial-kollmann.html' })
		.when('/testimonial-roth', { templateUrl : 'pages/testimonials/testimonial-roth.html' })
		.when('/testimonial-moser', { templateUrl : 'pages/testimonials/testimonial-moser.html' })
		.when('/testimonial-schuetzenhofer', { templateUrl : 'pages/testimonials/testimonial-schuetzenhofer.html' })
		.when('/testimonial-stitz', { templateUrl : 'pages/testimonials/testimonial-stitz.html' })
		.when('/testimonial-lehner', { templateUrl : 'pages/testimonials/testimonial-lehner.html' })
		.when('/testimonial-rabitsch', { templateUrl : 'pages/testimonials/testimonial-rabitsch.html' })
		.when('/testimonial-sternad', { templateUrl : 'pages/testimonials/testimonial-sternad.html' })
		.when('/testimonial-rosemanne', { templateUrl : 'pages/testimonials/testimonial-rosemanne.html' })
		.when('/testimonial-ly', { templateUrl : 'pages/testimonials/testimonial-ly.html' })
		.when('/testimonial-reinberger', { templateUrl : 'pages/testimonials/testimonial-reinberger.html' })
		.when('/testimonial-weichert', { templateUrl : 'pages/testimonials/testimonial-weichert.html' })
		.when('/testimonial-greil', { templateUrl : 'pages/testimonials/testimonial-greil.html' })


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