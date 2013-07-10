'use strict'

Application.Controllers.controller('camera', ['$scope', '$rootScope', 'options', function($scope, $rootScope, options){

  console.log('Camera Controller');
  linkToHost();

  $scope.info = "This is an info text";
  $scope.options = options;
                                              
  $scope.takePicture = function(){
    navigator.camera.getPicture(onSuccess, onFail, {
     quality: 50,
     sourceType: Camera.PictureSourceType.CAMERA,
     destinationType: Camera.DestinationType.DATA_URL
    });
  }
                                              
  $scope.loadPicture = function(){
    navigator.camera.getPicture(onSuccess, onFail, {
     quality: 50,
     sourceType:Camera.PictureSourceType.PHOTOLIBRARY,
     destinationType: Camera.DestinationType.DATA_URL
    });
  }
  
}]);



function onSuccess(imageData) {
    var image = document.getElementById('myImage');
    image.src = "data:image/jpeg;base64," + imageData;
}

function onFail(message) {
    alert('Failed because: ' + message);
}

function linkToHost(){
  if( typeof(process) !== 'undefined' ){
    window.host = process.mainModule.exports;
    console.log('INFO: linked to HOST');
  }
}