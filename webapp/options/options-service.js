'use strict'

Application.Services.factory('options', ['configuration', '$resource', function(configuration, $resource){

  var BASE_URL = configuration.API_URL+'/123.123.123.123.json';
  var OptionsResource = $resource(BASE_URL);

  return OptionsResource.get();

}]);
