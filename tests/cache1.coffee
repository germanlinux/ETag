puts = console.log
assert = require('assert')
ETag   = require('../Etag.js')
remainingTests = 1
puts("nb test: " + remainingTests) 
checkDone = () ->
    remainingTests = remainingTests - 1
    if (remainingTests == 0) 
      puts("All tests passed")
    
puts ("Debut tests: " + __filename) 

myetag = new ETag({'url': '/foo/bar.png', 'etag': '1234567890'})
chaine= "Test avec new "
try
        assert.equal ETag.Items() , 1
        puts(chaine + '  : ok')
        checkDone()
catch error
        puts("ERROR: " + error.expected + " (expected) <==> (actuel) " + error.actual)


# fin des tests
if remainingTests > 0 
  puts("Tests Failed !!")

