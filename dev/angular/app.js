	// create the module and name it scotchApp
	var holisApp = angular.module('holisApp', ['ngRoute']);

	// configure our routes
	holisApp.config(function($routeProvider, $locationProvider) {
		$routeProvider

		.when('/', { templateUrl : 'pages/home.html' })
		.when('/news', { templateUrl : 'pages/news.php' })
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
		.when('/jobs', { templateUrl : 'pages/jobs.html' })
		
		.when('/team-belinda', { templateUrl : 'pages/team/team-belinda.html' })
		.when('/team-sarah', { templateUrl : 'pages/team/team-sarah.html' })
		.when('/team-sonja', { templateUrl : 'pages/team/team-sonja.html' })
		.when('/team-franz', { templateUrl : 'pages/team/team-franz.html' })
		.when('/team-bernhard', { templateUrl : 'pages/team/team-bernhard.html' })
		.when('/team-sabrina', { templateUrl : 'pages/team/team-sabrina.html' })
		
		.when('/testimonial-arzberger', { templateUrl : 'pages/testimonials/testimonial-arzberger.html' })
		.when('/testimonial-brandstaetter', { templateUrl : 'pages/testimonials/testimonial-brandstaetter.html' })
		.when('/testimonial-diephuis', { templateUrl : 'pages/testimonials/testimonial-diephuis.html' })
		.when('/testimonial-eipeltauer', { templateUrl : 'pages/testimonials/testimonial-eipeltauer.html' })
		.when('/testimonial-frischefritzen', { templateUrl : 'pages/testimonials/testimonial-frischefritzen.html' })
		.when('/testimonial-furdea', { templateUrl : 'pages/testimonials/testimonial-furdea.html' })
		.when('/testimonial-gin', { templateUrl : 'pages/testimonials/testimonial-gin.html' })
		.when('/testimonial-greil', { templateUrl : 'pages/testimonials/testimonial-greil.html' })
		.when('/testimonial-gruenzweil', { templateUrl : 'pages/testimonials/testimonial-gruenzweil.html' })
		.when('/testimonial-kivrak', { templateUrl : 'pages/testimonials/testimonial-kivrak.html' })
		.when('/testimonial-kollmann', { templateUrl : 'pages/testimonials/testimonial-kollmann.html' })
		.when('/testimonial-kroiss', { templateUrl : 'pages/testimonials/testimonial-kroiss.html' })
		.when('/testimonial-lehner', { templateUrl : 'pages/testimonials/testimonial-lehner.html' })
		.when('/testimonial-leplay', { templateUrl : 'pages/testimonials/testimonial-leplay.html' })
		.when('/testimonial-mayr', { templateUrl : 'pages/testimonials/testimonial-mayr.html' })
		.when('/testimonial-moser', { templateUrl : 'pages/testimonials/testimonial-moser.html' })
		.when('/testimonial-ortner', { templateUrl : 'pages/testimonials/testimonial-ortner.html' })
		.when('/testimonial-rabitsch', { templateUrl : 'pages/testimonials/testimonial-rabitsch.html' })
		.when('/testimonial-rainer', { templateUrl : 'pages/testimonials/testimonial-rainer.html' })
		.when('/testimonial-reisinger', { templateUrl : 'pages/testimonials/testimonial-reisinger.html' })
		.when('/testimonial-reitmayr', { templateUrl : 'pages/testimonials/testimonial-reitmayr.html' })
		.when('/testimonial-rosemanna', { templateUrl : 'pages/testimonials/testimonial-rosemanna.html' })	
		.when('/testimonial-rosemanne', { templateUrl : 'pages/testimonials/testimonial-rosemanne.html' })
		.when('/testimonial-roth', { templateUrl : 'pages/testimonials/testimonial-roth.html' })
		.when('/testimonial-schauerhofer', { templateUrl : 'pages/testimonials/testimonial-schauerhofer.html' })
		.when('/testimonial-schilcher', { templateUrl : 'pages/testimonials/testimonial-schilcher.html' })
		.when('/testimonial-shenti', { templateUrl : 'pages/testimonials/testimonial-shenti.html' })
		.when('/testimonial-schuetzenhofer', { templateUrl : 'pages/testimonials/testimonial-schuetzenhofer.html' })
		.when('/testimonial-seyr', { templateUrl : 'pages/testimonials/testimonial-seyr.html' })	
		.when('/testimonial-stitz', { templateUrl : 'pages/testimonials/testimonial-stitz.html' })

		;
		// use the HTML5 History API
		// $locationProvider.html5Mode(true);
	});

	holisApp.run(['$rootScope', function($rootScope){

		function isHomepage(current){
			try{
			    return current.$$route.originalPath == "/" || current.$$route.originalPath == "";
			    $(".fancybox").fancybox();
			}
			catch(err){
				return false;
			}
		}

		$rootScope.$on('$routeChangeSuccess', function(event, current, previous){
			$rootScope.startpage = isHomepage(current);
		});
}]);