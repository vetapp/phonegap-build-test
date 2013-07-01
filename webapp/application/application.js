'use strict'

/**
* The application file bootstraps the angular app by  initializing the main module and 
* creating namespaces and moduled for controllers, filters, services, and directives. 
*/

var Application = Application || {};

Application.Constants = angular.module('application.constants', []);
Application.Services = angular.module('application.services', []);
Application.Controllers = angular.module('application.controllers', []);
Application.Filters = angular.module('application.filters', []);
Application.Directives = angular.module('application.directives', []);

var dependentModules = [
  'application.filters',
  'application.services',
  'application.directives',
  'application.constants',
  'application.controllers',
  'ui.keypress',
  'ngResource'];

angular.module('application', dependentModules ).
  config(['$routeProvider', '$locationProvider',  function($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider.
      when('/about', {templateUrl: 'about/about-partial.html'}).
      otherwise({templateUrl: 'main/main-partial.html'});
  }]);

