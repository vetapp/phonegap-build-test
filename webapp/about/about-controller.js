'use strict'

Application.Controllers.controller('about', ['$scope', '$rootScope', 'options', function($scope, $rootScope, options){

  console.log('About Controller');
  linkToHost();

  $scope.info = "This is an info text";
  $scope.options = options;
  
}]);

function linkToHost(){
  if( typeof(process) !== 'undefined' ){
    window.host = process.mainModule.exports;
    console.log('INFO: linked to HOST');
  }
}