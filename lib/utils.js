
module.exports = {
  rewrite: function(){
    return function(req, res, next){
      var REWRITE = /\/(guide|api|cookbook|misc|tutorial).*$/,
          IGNORED = /(\.(css|js|png|jpg)$|partials\/.*\.html$)/,
          match;

      if (!IGNORED.test(req.url) && (match = req.url.match(REWRITE))) {
        console.log('rewriting', req.url);
        req.url = req.url.replace(match[0], '/index.html');
      }
      next();
    };
  }
};
