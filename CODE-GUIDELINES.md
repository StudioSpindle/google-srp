
# Code guidelines

Please follow these code guidelines when making a contribution to google-srp.

## Code formatting

To check formatting use (used on CI): 

```bash
$ npm run prettier:check
```

To automatically fix formatting use:

```bash
$ npm run prettier:fix
```

## ES6

A progressive approach is used for JS. For example the ES6 syntax together with *Ecma Script Modules* (ESM) is preferred over *CommonJS* (CJS).

This does require an additional build step using babel, and mocha will use the [esm](https://www.npmjs.com/package/esm) package. 

Several advantages of ESM over CJS:
- Tier browsers support it
- Makes treeshaking possible

Source: [the-state-of-javascript-modules](https://medium.com/webpack/the-state-of-javascript-modules-4636d1774358) - by J. Ewald

This means that modules are defined using: 

ESM format example :+1::
```javascript
export default function() {}
```

or

```javascript
const myFunction = function() {};
export default myFunction;
```

And not the CommonJS (CJS) format example :-1:: 
```javascript
modules.exports = value;
```
