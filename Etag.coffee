#module etag 
module.exports = class ETag
 @all_etag : {}
 createETag:  (options = {} ) ->
   options.url ?= '/foo/bar.png' 
   options.etag ?= '0'
   @value  = options.etag
   ETag.all_etag[options.url] = @value
   
 @find: (etag) -> 
   @all_etag[etag] 
 
