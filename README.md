# egg-firebase

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-firebase.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-firebase
[travis-image]: https://img.shields.io/travis/eggjs/egg-firebase.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-firebase
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-firebase.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-firebase?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-firebase.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-firebase
[snyk-image]: https://snyk.io/test/npm/egg-firebase/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-firebase
[download-image]: https://img.shields.io/npm/dm/egg-firebase.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-firebase

<!--
Description here.
-->

## Install

```bash
$ npm i egg-firebase --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.firebase = {
  enable: true,
  package: 'egg-firebase',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.firebase = {
  client: {
    credential: require('yourSecretKey.json'),
    database: 'your database url',
    collection: 'your collection name for test connection'
  },
  app: true,
  agent: false
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
