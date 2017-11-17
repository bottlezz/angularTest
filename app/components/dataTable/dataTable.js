angular.module('myApp.dataTable', ['myApp.companyEntry'])

.component('listDataTable',{
    templateUrl: 'components/dataTable/dataTable.html',
    bindings:{ 
        items:'='
    }
 
})

// .controller('dataTableCtrl',['$scope',($scope)=>{

    
//     console.log(this.items)
// }])
