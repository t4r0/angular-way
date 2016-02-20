angular.module('AngularWay')
	.directive('cakeCard',function () {
		return {
			restrict:'E',
			controller:'CakeCardController',
			templateUrl:'partials/directives/cake-card.html',
			scope:{
				cake:'='
			}
		};
	});