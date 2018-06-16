var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-map-value');

describe('next/mapValue', function () {

  it('nx.mapValue', function () {
    var obj1 = { name: ['fei'], age: [100] };

    var rs1 = nx.mapValue(obj1, (key,value)=>{
      return value[0];
    });

    assert.equal(rs1.name, 'fei');
    assert.equal(rs1.age, 100);
  });

});
