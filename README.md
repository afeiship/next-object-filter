# next-map-value
> Map value for next

## install:
```bash
npm install -S afeiship/next-map-value --registry=https://registry.npm.taobao.org
```

## usage:
```js
var obj1 = { name: ['fei'], age: [100] };
var rs1 = nx.mapValue(obj1, (key,value)=>{
  return value[0];
});
// result:
// { name: 'fei', age: 100 }
```
