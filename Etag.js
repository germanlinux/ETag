(function() {
  var ETag;
  module.exports = ETag = (function() {
    function ETag() {}
    ETag.all_etag = {};
    ETag.prototype.createETag = function(options) {
      var _ref, _ref2;
      if (options == null) {
        options = {};
      }
      if ((_ref = options.url) == null) {
        options.url = '/foo/bar.png';
      }
      if ((_ref2 = options.etag) == null) {
        options.etag = '0';
      }
      this.value = options.etag;
      return ETag.all_etag[options.url] = this.value;
    };
    ETag.find = function(etag) {
      return this.all_etag[etag];
    };
    return ETag;
  })();
}).call(this);
