var express = require('express');
var minify = require('express-minify');

var app = express();
app.use( express.bodyParser() );
app.use( express.cookieParser() ); 
app.use( express.compress() );
app.use( express.session({secret:'1324567'}) );

var flags = function(req,res,next){
  if( req.url === '/flags/compression'){
    req.session.__compression = !!!req.session.__compression;
    console.log('compression:' + req.session.__compression)
    return res.send(200,'Compression:' + req.session.__compression)
  }
  next();
}

//app.use( flags );

var compressionEnabled = function(req){
  if(req.session && req.session.__compression === false)
    return false;
  else
    return true;
};

var optional = function(optionSwitchFn,fn){
  return function(req,res,next){
    if(optionSwitchFn(req))
      return fn(req,res,next);
    else
      next();
  }
};

//app.use( optional(compressionEnabled,minify()) );

var ExpressWebAppHost = require('express-webapp-host');
var appHost = ExpressWebAppHost(app);

var api = require('./api');

appHost.api('/api', api, {legacy:{demo:true, path:__dirname+'/api/legacy'}} );
appHost.webapp('/', __dirname+'/webapp');

app.listen(8080);
console.log('listening. goto: http://localhost:8080/index.html')
