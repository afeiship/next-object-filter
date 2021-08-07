# next-object-filter
> Get new object like array filter.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-object-filter
```

## usage
```js
import '@jswork/next-object-filter';

const env = process.env;
const res = nx.objectFilter(env, function (key, value) {
  return key.includes('npm_config');
});
const keys = Object.keys(res);
const allTruthy = keys.every(key => key.includes('npm_config'));

// true
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-object-filter/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-object-filter
[version-url]: https://npmjs.org/package/@jswork/next-object-filter

[license-image]: https://img.shields.io/npm/l/@jswork/next-object-filter
[license-url]: https://github.com/afeiship/next-object-filter/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-object-filter
[size-url]: https://github.com/afeiship/next-object-filter/blob/master/dist/next-object-filter.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-object-filter
[download-url]: https://www.npmjs.com/package/@jswork/next-object-filter
