angular.module('myApp', [])
  .controller('DateTimeController', function ($scope) {
    $scope.currentDateTime = new Date();
  });
