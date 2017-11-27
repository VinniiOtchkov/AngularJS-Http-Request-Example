var myApp = angular.module('myApp', []);

myApp.controller('mainController', [
  '$scope',
  '$filter',
  '$http',
  function($scope, $filter, $http) {

    $scope.handle = '';
    $scope.newRule = '';

    $scope.lowercasehandle = function() {
      return $filter('lowercase')($scope.handle);
    };

    $scope.characters = 5;

    // $scope.addRule = function() {
    //   $http.post('http://59e5b56cf99ad900122682ad.mockapi.io/posts', newRule: $scope.newRule)
    //
    //   .success(function(result) {
    //     $scope.rules = result;
    //     $scope.newRule = '';
    //   })
    //   .error(function(data, status) {
    //     console.log(data);
    //   });
    // }

    // $scope.addRule = function() {
    //   $http({
    //     method: 'POST',
    //     url: 'http://59e5b56cf99ad900122682ad.mockapi.io/posts'
    //   })
    // }

    $scope.addRule = function() {
      $http({
        url: 'http://59e5b56cf99ad900122682ad.mockapi.io/posts',
        method: 'POST',
        data: {
          body: $scope.newRule
        }
      }).then(function(res) {
        $scope.rules = res.data;
        $scope.newRule = '';
      })
    }

    $http({method: 'GET', url: 'http://59e5b56cf99ad900122682ad.mockapi.io/posts'}).then(function(res) {
      $scope.rules = res.data
    }, function(error) {
      console.log(error, 'cannot get data')
    })
  }

]);
