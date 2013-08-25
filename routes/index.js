
var fib = require('./fib');
var fibCache = require('./fibCache');

function index(req, res){
  res.render('index', { title: 'fib' });
};

function cacheview(req,res){
  res.render('fibcacheview', { fibCacheInstance : fibCache });
};

//new EJS({url: 'comments.ejs'}).update('element_id', '/comments.json');





// Set up routes
module.exports = function(app, options) {
  app.get('/', index);
  app.get('/fibcache/view', cacheview );
  
  app.get('/fib/:num', fib.getFib );
  
  app.get('/fibCache/:num', fibCache.getFib );
  app.get('/fibSequence/:num', fibCache.getFibSequence );
  
};
