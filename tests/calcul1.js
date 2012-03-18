(function() {
  var ETag, assert, chaine, checkDone, myetag, puts, remainingTests;
  puts = console.log;
  assert = require('assert');
  ETag = require('../Etag.js');
  remainingTests = 3;
  puts("nb test: " + remainingTests);
  checkDone = function() {
    remainingTests = remainingTests - 1;
    if (remainingTests === 0) {
      return puts("All tests passed");
    }
  };
  puts("Debut tests: " + __filename);
  myetag = new ETag;
  myetag.createETag({
    'url': '/foo/zombi.jpg',
    'resource': 'tests/zombi.jpg'
  });
  chaine = "Test calcul ETAG";
  puts(chaine);
  try {
    assert.equal(myetag.value, '"3813434-33774-1331909155000"');
    puts(chaine + '  : ok');
    checkDone();
  } catch (error) {
    puts("ERROR: " + error.expected + " (expected) <==> (actuel) " + error.actual);
  }
  chaine = "echec sur fichier";
  puts(chaine);
  myetag = new ETag({
    'url': '/foo/zombi.jpg',
    'resource': 'tests/zombiland'
  });
  try {
    assert.equal(myetag.value, 0);
    puts(chaine + '  : ok');
    checkDone();
  } catch (error) {
    puts("ERROR: " + error.expected + " (expected) <==> (actuel) " + error.actual);
  }
  chaine = "Calcul en ligne";
  puts(chaine);
  puts(ETag.Calcul({
    'url': '/foo/zombi.jpg',
    'resource': 'tests/zombi.jpg'
  }));
  try {
    assert.equal(ETag.Calcul({
      'url': '/foo/zombi.jpg',
      'resource': 'tests/zombi.jpg'
    }), '"3813434-33774-1331909155000"');
    puts(chaine + '  : ok');
    checkDone();
  } catch (error) {
    puts("ERROR: " + error.expected + " (expected) <==> (actuel) " + error.actual);
  }
  if (remainingTests > 0) {
    puts("Tests Failed !!");
  }
}).call(this);
