puts = console.log
assert = require('assert')
Etag   = require('../Etag.js')
remainingTests = 3
puts("nb test: " + remainingTests) 
checkDone = () ->
    remainingTests = remainingTests - 1
    if (remainingTests == 0) 
      puts("All tests passed")
    
 


puts ("Debut tests: " + __filename) 
myetag = new Etag
myetag.createETag({'url': '/foo/bar.png', 'etag': '1234567890'})
chaine = "Test instance avec ETAG"
puts(chaine)
try
        assert.equal(myetag.value,'1234567890')
        puts(chaine + '  : ok')
        checkDone()
catch error
        puts("ERROR: " + error.expected + " (expected) <==> (actuel) " + error.actual)
        

chaine = "Test recherche avec ETAG"
puts(chaine)
my_etag = Etag.find('/foo/bar.png')

try
    
        assert.equal(my_etag,'1234567890')
        puts(chaine + '  : ok')
        checkDone()
catch error
        puts("ERROR: " + error.expected + " (expected) <==> (actuel) " + error.actual)
        
my_etag = Etag.find('/foo/b.png')
chaine = "Test recherche avec mauvais ETAG"

try
    
        assert.notEqual(my_etag,'1234567890')
        puts(chaine + '  : ok')
        checkDone()
catch error
        puts("ERROR: " + error.expected + " (expected) <==> (actuel) " + error.actual)


if remainingTests > 0 
  puts("Tests Failed !!")


