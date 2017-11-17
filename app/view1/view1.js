'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ["$http",function($http) {
  var self=this;
  $http.get('/test.json').then((response) =>{
    self.data = response.data;
    console.log(self.data);
  });
}]);