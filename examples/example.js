var defaultValues = require('..');

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

var cfg = defaultValues(provided, defaults);

for (attr in cfg) {
  console.log(attr + ': ' + cfg[attr]);
}
