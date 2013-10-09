var defaultValues = require('..');
var assert = require('assert');

describe('Default Value', function () {
  it('should create a new object', function() {
    var cfg = defaultValues();

    assert.ok(cfg);
  });
});
