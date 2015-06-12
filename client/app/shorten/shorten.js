angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link={};

  $scope.addLink = function(){
    Links.postLink($scope.link).then(function(){
      $scope.link = '';
    }).catch(function (error) {
      console.error(error);
    });
  }
});
