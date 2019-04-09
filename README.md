# nuxt-i18n-default

[![NPM Package](https://img.shields.io/npm/v/nuxt-i18n-default.svg?style=flat-square)](https://www.npmjs.org/package/nuxt-i18n-default)
[![Minified Size](https://img.shields.io/bundlephobia/min/nuxt-i18n-default.svg?style=flat-square)](https://bundlephobia.com/result?p=nuxt-i18n-default)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://github.com/shrpne/nuxt-i18n-default/blob/master/LICENSE)

Add `$td()` method to specify default value

[ci-img]:  https://travis-ci.org/shrpne/nuxt-i18n-default.svg
[ci]:      https://travis-ci.org/shrpne/nuxt-i18n-default


## Install

### NPM

```bash
npm install nuxt-i18n-default
```

Register Nuxt module
```js
// nuxt-config.js
module.exports = {
    modules: [
        'nuxt-i18n-default',
        ['nuxt-i18n', {
            // options
        }],
    ],
};
```

## Usage

```html
{{ $td('My default text', 'message.hello') }}
``` 


## License

MIT License
