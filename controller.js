angular.module('reddit')
.controller('PostsController', function($scope, firebaseService) {
	firebaseService.getPosts().then(function(posts) {
		

	})
})