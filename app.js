var app = angular.module('flapperNews', ['ui.router']);

app.config([
	'$stateProvider',
	'$urlRouterProvider',
	function($stateProvider, $urlRouterProvider){
		$stateProvider
			.state('home', {
				url: '/home',
				templateUrl: '/home.html',
				controller: 'MainCtrl'
			});
			//if router receives a url not defined, it will go home.
			$urlRouterProvider.otherwise('home');
		}]);

app.factory('posts', [function(){
	var o = {
		posts: [{title: 'hello', link: '', upvotes: 0}]
	};
	return o;
	// o can now be injected in any module.
}]);

app.controller('MainCtrl', [
'$scope',
'posts',
function($scope, posts){
  	$scope.posts = posts.posts;
		$scope.addPost = function(){
	  if(!$scope.title || $scope.title === '') { return; }
	  $scope.posts.push({
	    title: $scope.title,
	    link: $scope.link,
	    upvotes: 0
	  });
	  $scope.title = '';
	  $scope.link = '';
	};
	$scope.incrementUpvotes = function(post){
		post.upvotes +=1;
	};
}]);


