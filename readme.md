# stripbom [![NPM Module](https://img.shields.io/npm/v/stripbom.svg?style=flat)](https://www.npmjs.com/package/stripbom)

Strip UTF-8 byte order mark (BOM) from a string. Works in all node versions.

[![Linux Build](https://img.shields.io/travis/alexindigo/stripbom/master.svg?label=linux:0.10-6.x&style=flat)](https://travis-ci.org/alexindigo/stripbom)
[![Windows Build](https://img.shields.io/appveyor/ci/alexindigo/stripbom/master.svg?label=windows:0.10-6.x&style=flat)](https://ci.appveyor.com/project/alexindigo/stripbom)

[![Coverage Status](https://img.shields.io/coveralls/alexindigo/stripbom/master.svg?label=code+coverage&style=flat)](https://coveralls.io/github/alexindigo/stripbom?branch=master)
[![Dependency Status](https://img.shields.io/david/alexindigo/stripbom.svg?style=flat)](https://david-dm.org/alexindigo/stripbom)

[![bitHound Overall Score](https://www.bithound.io/github/alexindigo/stripbom/badges/score.svg)](https://www.bithound.io/github/alexindigo/stripbom)

> Strip UTF-8 [byte order mark](http://en.wikipedia.org/wiki/Byte_order_mark#UTF-8) (BOM) from a string

From Wikipedia:

> The Unicode Standard permits the BOM in UTF-8, but does not require nor recommend its use. Byte order has no meaning in UTF-8.

## Why

Starting version 3.x of npmjs.com/strip-bom doesn't support node below v4,
and previous versions have security issues, so this brings all the happiness
to those who are still in supporting older versions of node business

## Install

```
$ npm install --save stripbom
```

## Usage

```js
const stripBom = require('stripbom');

stripBom('\uFEFFunicorn');
//=> 'unicorn'
```

## License

StripBOM is licensed under the MIT license.
