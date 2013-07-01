'use strict'

Application.Directives.directive('appShowonhoverparent',
   function() {
      return {
         link : function(scope, element, attrs) {
            element.hide();
            element.parent().bind('mouseenter', function() {
                element.show();
            });
            element.parent().bind('mouseleave', function() {
                element.hide();
            });
       }
   };
});