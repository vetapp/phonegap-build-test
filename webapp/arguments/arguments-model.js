'use strict'

Application.Services.factory('args', ['$location',function($location) {

  var args = lowerCaseProperties( $location.search() );
  args.referenceId = parseReferenceId(args);

  return args;

  function parseReferenceId(a){
    var ref = 'c_wnddk.'+a.doknr+'.'+a.sysid+'.'+a.mandt+'.'+a.dokar+'.'+a.dokvr+'.'+a.doktl;

    if( ref.length >= 128 ){
      ref = ref.substr(0,128);
    }

    return ref;
  }

  function lowerCaseProperties(object){
    var lowerCase = {};

    var keys = Object.keys(object);
    var n = keys.length;

    while (n--) {
      var key = keys[n];
      lowerCase[key.toLowerCase()] = object[key];
    }

    return lowerCase;
  }
}]);