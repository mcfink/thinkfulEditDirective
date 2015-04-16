angular.module('editApp', [])
	.directive('makeEditable', function(){
		return{
			restrict: 'A',
			transclude: true,
			templateUrl: "text-chunk.html",
			scope: true
		};
	});