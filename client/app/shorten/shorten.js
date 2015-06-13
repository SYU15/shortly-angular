angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link={};
  $scope.bool=false;
  $scope.loading=false;
  var isValidUrl = function(url) {
    return url.match(rValidUrl);
  };
  var rValidUrl = /^(?!mailto:)(?:(?:https?|ftp):\/\/)?(?:\S+(?::\S*)?@)?(?:(?:(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[0-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))|localhost)(?::\d{2,5})?(?:\/[^\s]*)?$/i;
  $scope.addLink = function(){
    $scope.loading=true;
    if(isValidUrl($scope.link.url)){
      $scope.bool=false;
      Links.postLink($scope.link).then(function(){
        $scope.loading=false;
        $scope.link = '';
      }).catch(function (error) {
        console.error(error);
      });
    } else {
      console.log('invalid url');
      $scope.link = '';
      $scope.bool=true;
      $scope.loading=false;

    }
  }
});
