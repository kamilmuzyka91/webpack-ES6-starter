# Starter for webpack v5 and webpack-cli v4 with configuration example

Basic webapack configuration with added dev-server and babel - ready to use and customize.

- https://webpack.js.org/configuration/dev-server/#usage-via-cli
- https://babeljs.io/docs/en/babel-preset-env
- https://babeljs.io/docs/en/

## How to use it ?

- Clone repository
- Run `npm i`
- Run with `npm start` command from the root directory
- Enjoy !

## Plugin

All plugins offered by webpack:

- https://webpack.js.org/plugins/

## What mode should I set for webpack?

- mode: 'production',
- mode: 'development',
- mode: 'none',

```
module.exports = {
  mode: 'development',
};
```

- https://webpack.js.org/configuration/mode/

## Browser Compatibility

Webpack supports all browsers that are ES5-compliant (IE8 and below are not supported). Webpack needs Promise for import() and require.ensure(). If you want to support older browsers, you will need to load a polyfill before using these expressions.

## Environment

Webpack 5 runs on Node.js version 10.13.0+.
