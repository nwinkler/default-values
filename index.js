module.exports = exports = applyDefaults;

function applyDefaults (defaultValues, providedValues) {
  var ret = {};

  copyProperties(providedValues, ret);
  copyProperties(defaultValues, ret);

  return ret;
};

function copyProperties (source, target) {
  var prop;

  if (!target) {
    target = {};
  }

  if (source) {
    for (prop in source) {
      if (!(prop in target)) {
        target[prop] = source[prop];
      }
    }
  }

  return target;
};
