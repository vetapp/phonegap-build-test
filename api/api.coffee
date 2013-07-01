fs = require('fs')
path = require('path')
mkdirp = require('mkdirp')
crypto = require('crypto')
util = require('util')

module.exports = (app, options)->

  if( !options )
    options = {}

  app.get '/options', (req, res)->
    res.json(options:options)
  
  