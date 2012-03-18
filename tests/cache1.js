(function() {
  var ETag, assert, chaine, checkDone, myetag, puts, remainingTests;
  puts = console.log;
  assert = require('assert');
  ETag = require('../Etag.js');
  remainingTests = 1;
  puts("nb test: " + remainingTests);
  checkDone = function() {
    remainingTests = remainingTests - 1;
    if (remainingTests === 0) {
      return puts("All tests passed");
    }
  };
  puts("Debut tests: " + __filename);
  myetag = new ETag({
    'url': '/foo/bar.png',
    'etag': '1234567890'
  });
  chaine = "Test avec new ";
  try {
    assert.equal(ETag.Items(), 1);
    puts(chaine + '  : ok');
    checkDone();
  } catch (error) {
    puts("ERROR: " + error.expected + " (expected) <==> (actuel) " + error.actual);
  }
  if (remainingTests > 0) {
    puts("Tests Failed !!");
  }
}).call(this);
