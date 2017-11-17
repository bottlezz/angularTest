angular.module('myApp', ['ngRoute'])

.component('',{
    templateUrl: 'dataTable.html',
    controller: 'dataTableCtrl',
    bindings:{ itemTemplate:'='}
})

.controller('dataTableCtrl',function(){})
