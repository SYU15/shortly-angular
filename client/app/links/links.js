angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $window, $location, Links) {
  // Your code here
  $scope.data = {};
  $scope.search='';
  $scope.userID = $window.localStorage.getItem('id')
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
  if($window.localStorage.getItem('com.shortly').length > 0){
    $scope.getLinks();
  }
  else{
    $location.path('/signin');
  }
});
// angular.module('shortly')

