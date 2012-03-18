#module etag 
fs = require('fs')
module.exports = class ETag
 @all_etag = {}
 @cp  = 0
## Constructeur
 constructor: (options) ->
   @createETag(options) 
## Alias au constructeur
 createETag:  (options = {} ) ->
   options.url ?= '/foo/bar.png' 
   tetag = 0
   if options.resource?
          tetag = ETag.Calcul_etag(options.resource) 
       
   options.etag ?= tetag
   @value  = options.etag
   ETag.all_etag[options.url] = @value
## Méthode de class pour caluler l'ETag 
 @Calcul:  (options = {} ) ->
   options.url ?= '/foo/bar.png' 
   tetag = 0
   if options.resource?
          tetag = @Calcul_etag(options.resource) 
       
   options.etag ?= tetag
   @value  = options.etag
   ETag.all_etag[options.url] = @value
   return tetag
    
 @Find: (etag) -> 
   @all_etag[etag] 
   
 @List: ->
   @all_etag
 @Items: ->
   if @cp == 0
    for i of @all_etag
        @cp = @cp + 1
  
   return @cp
 @Raz: ->
   @all_etag = []
   @cp = 0

 @Calcul_etag: (file)  ->
     etag = 0 
     try  
        infop   = fs.statSync(file)
        etag    = '"' + infop.ino + '-' +infop.size + '-' + Date.parse(infop.mtime) + '"'
     catch error  
       console.log(error)
     
     return etag
 
