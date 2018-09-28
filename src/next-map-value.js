(function () {

  var global = global || this || window || self || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  nx.mapValue = function (inObj, inCallback, inContext) {
    var result = {};
    nx.each(inObj, function (key, value) {
      var _value = inCallback.call(inContext, key, value, inObj);
      result[key] = _value;
    }, inContext);
    return result;
  };


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.mapValue;
  }

}());
