'use strict';

angular.module('myApp.view1', 
['ngRoute',
'myApp.dataTable',
'myApp.companyEntry'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope','$http',function($scope,$http) {
  var self=this;
  //$scope.items=[];
  $scope.items2 = ["hello"];
  $http.get('test.json').then((response) =>{
    $scope.items = response.data;

  });
  console.log("1")

}]);