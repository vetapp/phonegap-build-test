'use strict'

Application.Directives.directive('appFocus', function(){
  return function(scope, element){
    element[0].focus();
  };
});