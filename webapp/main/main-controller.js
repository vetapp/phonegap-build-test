'use strict'

Application.Controllers.controller('main', ['$scope', '$rootScope', '$location', function($scope, $rootScope, $location){

  console.log('Main Controller');
  linkToHost();

  $scope.about = function(){
    $location.path('/about');
  }
}]);

function linkToHost(){
  if( typeof(process) !== 'undefined' ){
    window.host = process.mainModule.exports;
    console.log('INFO: linked to HOST');
  }
}