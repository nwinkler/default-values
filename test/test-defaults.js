var defaultValues = require('..');
var assert = require('assert');

describe('Default Value', function () {
  var defaults = {
    foo1: 'd_bar1',
    foo2: 'd_bar2',
    foo3: 23,
    foo4: 45.67
  };

  var provided = {
    foo1: 'bar1',
    foo3: 2
  };

  it('should create a new object', function() {
    var cfg = defaultValues();

    assert.ok(cfg);
  });

  it('should use the provided values object without a provided default object', function() {
    var cfg = defaultValues(provided, undefined);

    assert.ok(cfg);

    assert.deepEqual(cfg, provided);

    assert.equal(cfg.foo1, provided.foo1);
    assert.ok(!cfg.foo2);
    assert.equal(cfg.foo3, provided.foo3);
    assert.ok(!cfg.foo4);
  });

  it('should use the provided values object with an empty default object', function() {
    var cfg = defaultValues(provided, {});

    assert.ok(cfg);

    assert.deepEqual(cfg, provided);

    assert.equal(cfg.foo1, provided.foo1);
    assert.ok(!cfg.foo2);
    assert.equal(cfg.foo3, provided.foo3);
    assert.ok(!cfg.foo4);
  });

  it('should use the default values object without a provided object', function() {
    var cfg = defaultValues(undefined, defaults);

    assert.ok(cfg);

    assert.deepEqual(cfg, defaults);

    assert.equal(cfg.foo1, defaults.foo1);
    assert.equal(cfg.foo2, defaults.foo2);
    assert.equal(cfg.foo3, defaults.foo3);
    assert.equal(cfg.foo4, defaults.foo4);
  });

  it('should use the default values object with an empty provided object', function() {
    var cfg = defaultValues({}, defaults);

    assert.ok(cfg);

    assert.deepEqual(cfg, defaults);

    assert.equal(cfg.foo1, defaults.foo1);
    assert.equal(cfg.foo2, defaults.foo2);
    assert.equal(cfg.foo3, defaults.foo3);
    assert.equal(cfg.foo4, defaults.foo4);
  });

  it('should merge the default values with the provided object', function() {
    var cfg = defaultValues(provided, defaults);

    assert.ok(cfg);

    assert.equal(cfg.foo1, provided.foo1);
    assert.equal(cfg.foo2, defaults.foo2);
    assert.equal(cfg.foo3, provided.foo3);
    assert.equal(cfg.foo4, defaults.foo4);
  });
});
