(function() {
  var ETag, fs;
  fs = require('fs');
  module.exports = ETag = (function() {
    ETag.all_etag = {};
    ETag.cp = 0;
    function ETag(options) {
      this.createETag(options);
    }
    ETag.prototype.createETag = function(options) {
      var tetag, _ref, _ref2;
      if (options == null) {
        options = {};
      }
      if ((_ref = options.url) == null) {
        options.url = '/foo/bar.png';
      }
      tetag = 0;
      if (options.resource != null) {
        tetag = ETag.Calcul_etag(options.resource);
      }
      if ((_ref2 = options.etag) == null) {
        options.etag = tetag;
      }
      this.value = options.etag;
      return ETag.all_etag[options.url] = this.value;
    };
    ETag.Calcul = function(options) {
      var tetag, _ref, _ref2;
      if (options == null) {
        options = {};
      }
      if ((_ref = options.url) == null) {
        options.url = '/foo/bar.png';
      }
      tetag = 0;
      if (options.resource != null) {
        tetag = this.Calcul_etag(options.resource);
      }
      if ((_ref2 = options.etag) == null) {
        options.etag = tetag;
      }
      this.value = options.etag;
      ETag.all_etag[options.url] = this.value;
      return tetag;
    };
    ETag.Find = function(etag) {
      return this.all_etag[etag];
    };
    ETag.List = function() {
      return this.all_etag;
    };
    ETag.Items = function() {
      var i;
      if (this.cp === 0) {
        for (i in this.all_etag) {
          this.cp = this.cp + 1;
        }
      }
      return this.cp;
    };
    ETag.Raz = function() {
      this.all_etag = [];
      return this.cp = 0;
    };
    ETag.Calcul_etag = function(file) {
      var etag, infop;
      etag = 0;
      try {
        infop = fs.statSync(file);
        etag = '"' + infop.ino + '-' + infop.size + '-' + Date.parse(infop.mtime) + '"';
      } catch (error) {
        console.log(error);
      }
      return etag;
    };
    return ETag;
  })();
}).call(this);
