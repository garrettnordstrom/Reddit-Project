var app = angular.madule('reddit');

app.service('FirebaseService', function($http, $q){
	this.getPosts = funciton(){
		return $http.get('https://devmtn.firebaseio.com/posts.json').then(function(result){
			return sesult.data;
		})

		
	}
})