	// create the module and name it scotchApp
	var holisApp = angular.module('holisApp', ['ngRoute']);

	// configure our routes
	holisApp.config(function($routeProvider, $locationProvider) {
		$routeProvider

		.when('/', { templateUrl : 'pages/home.html' })
		/*.when('/news', { templateUrl : 'pages/news.php' })*/
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
		.when('/jobs', { templateUrl : 'pages/jobs.html' })
		.when('/kontakte', { templateUrl : 'pages/contacts.html' })
		.when('/danke', { templateUrl : 'pages/thankyou.html' })
		.when('/impressum', { templateUrl : 'pages/impressum.html' })
		.when('/holisversum', { templateUrl : 'pages/holisversum.html' })
		.when('/mentor', { templateUrl : 'pages/mentor.html' })
		.when('/supporter', { templateUrl : 'pages/supporter.html' })
		.when('/kontakt', { templateUrl : 'pages/contact.html' })
		.when('/adventohnemuell', { templateUrl : 'pages/advent.html' })
		
		.when('/altmanninger', { templateUrl : 'pages/members/altmanninger.html' })
		.when('/anschober', { templateUrl : 'pages/members/anschober.html' })
		.when('/arzberger', { templateUrl : 'pages/members/arzberger.html' })
		.when('/brandstaetter', { templateUrl : 'pages/members/brandstaetter.html' })
		.when('/brandstetter', { templateUrl : 'pages/members/brandstetter.html' })
		.when('/diephuis', { templateUrl : 'pages/members/diephuis.html' })
		.when('/eipeltauer', { templateUrl : 'pages/members/eipeltauer.html' })
		.when('/fleisch', { templateUrl : 'pages/members/fleisch.html' })
		.when('/frischefritzen', { templateUrl : 'pages/members/frischefritzen.html' })
		.when('/furdea', { templateUrl : 'pages/members/furdea.html' })
		.when('/gin', { templateUrl : 'pages/members/gin.html' })
		.when('/greil', { templateUrl : 'pages/members/greil.html' })
		.when('/gruenzweil', { templateUrl : 'pages/members/gruenzweil.html' })
		.when('/gruenzweilfa', { templateUrl : 'pages/members/gruenzweilfa.html' })
		.when('/gruenzweils', { templateUrl : 'pages/members/gruenzweils.html' })
		.when('/gutenbrunner', { templateUrl : 'pages/members/gutenbrunner.html' })
		.when('/haas', { templateUrl : 'pages/members/haas.html' })
		.when('/holzer', { templateUrl : 'pages/members/holzer.html' })
		.when('/hornbogner', { templateUrl : 'pages/members/hornbogner.html' })
		.when('/kivrak', { templateUrl : 'pages/members/kivrak.html' })
		.when('/kollmann', { templateUrl : 'pages/members/kollmann.html' })
		.when('/kroiss', { templateUrl : 'pages/members/kroiss.html' })
		.when('/lehner', { templateUrl : 'pages/members/lehner.html' })
		.when('/leplay', { templateUrl : 'pages/members/leplay.html' })
		.when('/luger', { templateUrl : 'pages/members/luger.html' })
		.when('/mayr', { templateUrl : 'pages/members/mayr.html' })
		.when('/mayrb', { templateUrl : 'pages/members/mayrb.html' })
		.when('/moeseneder', { templateUrl : 'pages/members/moeseneder.html' })
		.when('/moser', { templateUrl : 'pages/members/moser.html' })
		.when('/neuburger', { templateUrl : 'pages/members/neuburger.html' })
		.when('/ninausm', { templateUrl : 'pages/members/ninausm.html' })
		.when('/oellinger', { templateUrl : 'pages/members/oellinger.html' })
		.when('/ortner', { templateUrl : 'pages/members/ortner.html' })
		.when('/rabitsch', { templateUrl : 'pages/members/rabitsch.html' })
		.when('/rainer', { templateUrl : 'pages/members/rainer.html' })
		.when('/rehberger', { templateUrl : 'pages/members/rehberger.html' })
		.when('/reisinger', { templateUrl : 'pages/members/reisinger.html' })
		.when('/reitmayr', { templateUrl : 'pages/members/reitmayr.html' })
		.when('/rosemanna', { templateUrl : 'pages/members/rosemanna.html' })	
		.when('/rosemanne', { templateUrl : 'pages/members/rosemanne.html' })
		.when('/roth', { templateUrl : 'pages/members/roth.html' })
		.when('/sarac', { templateUrl : 'pages/members/sarac.html' })
		.when('/schauerhofer', { templateUrl : 'pages/members/schauerhofer.html' })
		.when('/schilcher', { templateUrl : 'pages/members/schilcher.html' })
		.when('/schuetzenhofer', { templateUrl : 'pages/members/schuetzenhofer.html' })
		.when('/seher', { templateUrl : 'pages/members/seher.html' })
		.when('/shenti', { templateUrl : 'pages/members/shenti.html' })
		.when('/seyr', { templateUrl : 'pages/members/seyr.html' })	
		.when('/souldja', { templateUrl : 'pages/members/souldja.html' })
		.when('/stitz', { templateUrl : 'pages/members/stitz.html' })
		.when('/stojanovic', { templateUrl : 'pages/members/stojanovic.html' })
		.when('/swoboda', { templateUrl : 'pages/members/swoboda.html' })
		.when('/wagner', { templateUrl : 'pages/members/wagner.html' })
		.when('/weiss', { templateUrl : 'pages/members/weiss.html' })
		.when('/zotter', { templateUrl : 'pages/members/zotter.html' })

		;
		// use the HTML5 History API
		// $locationProvider.html5Mode(true);
	});

	holisApp.run(['$rootScope', function($rootScope){

		function isHomepage(current){
			try{
			    return current.$$route.originalPath == "/" || current.$$route.originalPath == "";
			}
			catch(err){
				return false;
			}
		}

		$rootScope.$on('$routeChangeSuccess', function(event, current, previous){
			$rootScope.startpage = isHomepage(current);
		});
}]);