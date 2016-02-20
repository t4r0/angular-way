angular.module('AngularWay')
	.directive('cakeGallery',function () {
		return {
			restrict:'E',
			controller:'CakeGalleryController',
			templateUrl:'partials/directives/cake-gallery.html'
		};
	});