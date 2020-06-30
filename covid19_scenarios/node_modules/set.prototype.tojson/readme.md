# set.prototype.tojson [![Build Status](https://travis-ci.org/hemanth/Set.prototype.toJSON.svg)](https://travis-ci.org/hemanth/Set.prototype.toJSON)

> ES7 polyfill for `set.prototype.toJSON()`

## Install

```
$ npm install --save set.prototype.tojson
```

## Usage

```js
require('set.prototype.tojson');

var mySet = new Set();
mySet.add(NaN);
mySet.add(1);
console.log(mySet.toJSON()) // {"1":1,"NaN":null}
```

## License

MIT © [hemanth](http://h3manth.com)
