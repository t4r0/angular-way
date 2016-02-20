angular.module('AngularWay')
	.controller('CakeGalleryController',['$scope', function ($scope) {
		$scope.cakes=[{
			name:'Selva Negra',
			description:'Carrot cake jelly-o toffee jelly oat cake lemon drops pie. Jelly-o cotton candy brownie sesame snaps chupa chups oat cake toffee muffin marshmallow. Fruitcake jujubes sugar plum danish danish macaroon pie chocolate cake. Danish danish chocolate topping',
			image:'https://i.ytimg.com/vi/g3E_FZc7fw4/hqdefault.jpg',
			price:'Q. 100',
			fancy:true
		},
		{
			name:'Tres Leches',
			description:'Carrot cake jelly-o toffee jelly oat cake lemon drops pie. Jelly-o cotton candy brownie sesame snaps chupa chups oat cake toffee muffin marshmallow. Fruitcake jujubes sugar plum danish danish macaroon pie chocolate cake. Danish danish chocolate topping.',
			image:'http://41.media.tumblr.com/091988827864cef2df86572e0c104994/tumblr_inline_nqhfr8apC01tstd1m_1280.jpg',
			price:'Q. 100',
			fancy:false
		},
		{
			name:'Tiramisu',
			description:'Carrot cake jelly-o toffee jelly oat cake lemon drops pie. Jelly-o cotton candy brownie sesame snaps chupa chups oat cake toffee muffin marshmallow. Fruitcake jujubes sugar plum danish danish macaroon pie chocolate cake. Danish danish chocolate topping.',
			image:'http://smoochsmile.co.za/sites/default/files/flavours/tiramisu.png',
			price:'Q. 100',
			fancy:true
		},
		{
			name:'Apple Pie',
			description:'Carrot cake jelly-o toffee jelly oat cake lemon drops pie. Jelly-o cotton candy brownie sesame snaps chupa chups oat cake toffee muffin marshmallow. Fruitcake jujubes sugar plum danish danish macaroon pie chocolate cake. Danish danish chocolate topping.',
			image:'http://images.media-allrecipes.com/images/52912.jpg',
			price:'Q. 100',
			fancy:false
		}];
	}]);