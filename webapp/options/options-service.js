'use strict'

Application.Services.factory('options', ['configuration', '$resource', function(configuration, $resource){

  var BASE_URL = configuration.API_URL+'/options';
  var OptionsResource = $resource(BASE_URL);

  return OptionsResource.get();

}]);
