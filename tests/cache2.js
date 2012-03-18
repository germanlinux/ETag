(function() {
  var ETag, assert, chaine, checkDone, my_etag, myetag, myetag2, puts, remainingTests;
  puts = console.log;
  assert = require('assert');
  ETag = require('../Etag.js');
  remainingTests = 5;
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
    'url': '/foo/bar.png',
    'etag': '1234567890'
  });
  chaine = "Test instance avec ETAG";
  puts(chaine);
  try {
    assert.equal(myetag.value, '1234567890');
    puts(chaine + '  : ok');
    checkDone();
  } catch (error) {
    puts("ERROR: " + error.expected + " (expected) <==> (actuel) " + error.actual);
  }
  chaine = "Test recherche avec ETAG";
  puts(chaine);
  my_etag = ETag.Find('/foo/bar.png');
  try {
    assert.equal(my_etag, '1234567890');
    puts(chaine + '  : ok');
    checkDone();
  } catch (error) {
    puts("ERROR: " + error.expected + " (expected) <==> (actuel) " + error.actual);
  }
  my_etag = ETag.Find('/foo/b.png');
  chaine = "Test recherche avec mauvais ETAG";
  try {
    assert.notEqual(my_etag, '1234567890');
    puts(chaine + '  : ok');
    checkDone();
  } catch (error) {
    puts("ERROR: " + error.expected + " (expected) <==> (actuel) " + error.actual);
  }
  chaine = "Test class avec ETAG";
  myetag2 = new ETag;
  myetag2.createETag({
    'url': '/foo/bor.jpeg',
    'etag': '1234567890123'
  });
  puts(chaine);
  puts(ETag.List());
  puts(ETag.Items());
  try {
    assert.equal(ETag.Items(), 2);
    puts(chaine + '  : ok');
    checkDone();
  } catch (error) {
    puts("ERROR: " + error.expected + " (expected) <==> (actuel) " + error.actual);
  }
  chaine = "RAZ des informations ETag";
  puts(chaine);
  ETag.Raz();
  try {
    assert.equal(ETag.Items(), 0);
    puts(chaine + '  : ok');
    checkDone();
  } catch (error) {
    puts("ERROR: " + error.expected + " (expected) <==> (actuel) " + error.actual);
  }
  if (remainingTests > 0) {
    puts("Tests Failed !!");
  }
}).call(this);
