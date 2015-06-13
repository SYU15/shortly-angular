angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {};
  $scope.getLinks = function(){
    Links.getLinks().then(function(links){
      links.sort(function(a,b){
        return b.visits-a.visits;
      });
      $scope.data.links = links;
      console.log($scope.data);
    }).catch(function (error) {
        console.error(error);
      });
  };
  $scope.getLinks();
});
