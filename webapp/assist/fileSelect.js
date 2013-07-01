'use strict'

Application.Directives.directive('appFileselect', function() {
  return {
    restrict: 'A',
    scope: {
      // autoOpen only works in webkit or other environments due to html security
      // restrictions
      autoOpen: '=',
      files: '='
    },
    link:function(scope, element, attrs) {
      element.bind('change', function(event) {
        scope.$apply(function(){
          scope.files = event.originalEvent.target.files;
        });
      });
      scope.$watch('files', function(files) {
        if(typeof(files)==='undefined' || files === null || files.length === 0){
          resetFileInputField(element);
        }
      });

      scope.$on('app-fileselect.open',function(open){
        console.log('opening')
        element.click();
      });

      if( scope.autoOpen && (scope.files == null || scope.files.length === 0)){
        console.log('opening')
        element.click();
      }
     }
   };

  function resetFileInputField(element){
    // in order to reset the files input we need to temporarily put a form around
    // it and reset that
    element.wrap('<form>').closest('form').get(0).reset();
    element.unwrap();
  }
 });
/*
   var template = '<input type="file" id="files" name="files" style="visibility: hidden; width: 1px; height: 1px" multiple />';
  return function( scope, elem, attrs ) {
    var selector = $( template );
    elem.append(selector);
    selector.bind('change', function( event ) {
      scope.$apply(function() {
        scope[ attrs.fileSelect ] = event.originalEvent.target.files;
      });
    });
    scope.$watch(attrs.fileSelect, function(file) {
      selector.val(file);
    });
  };
});
*/