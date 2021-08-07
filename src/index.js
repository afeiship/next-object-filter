(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  nx.objectFilter = function (inObject, inCallback, inContext) {
    var result = {};
    nx.forIn(inObject, function (key, value) {
      if (inCallback.call(inContext, key, value)) {
        result[key] = value;
      }
    });
    return result;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.objectFilter;
  }
})();
