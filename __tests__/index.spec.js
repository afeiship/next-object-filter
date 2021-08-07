(function () {
  require('../src');

  /*
  // other solution:
  // @url: https://masteringjs.io/tutorials/fundamentals/filter-object

  function filterObject(obj, callback) {
    return Object.fromEntries(Object.entries(obj).
      filter(([key, val]) => callback(val, key)));
  }
  */

  describe('api.basic test', () => {
    test('nx.objectFilter should filter object', function () {
      const env = process.env;
      const res = nx.objectFilter(env, function (key, value) {
        return key.includes('npm_config');
      });
      const keys = Object.keys(res);
      const allTruthy = keys.every((key) => key.includes('npm_config'));
      expect(allTruthy).toBe(true);
    });
  });
})();
