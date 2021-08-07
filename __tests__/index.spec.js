(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.objectFilter should filter object', function () {
      const env = process.env;
      const res = nx.objectFilter(env, function (key, value) {
        return key.includes('npm_config');
      });
      const keys = Object.keys(res);
      const allTruthy = keys.every(key => key.includes('npm_config'));
      expect(allTruthy).toBe(true);
    });
  });
})();
