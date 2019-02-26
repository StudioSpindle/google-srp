# google-srp
Search Results Page plugin for Google Custom Search API

## Installation

### NPM

```bash
$ npm install --save google-srp
```

## Usage

```node
const googleSrp = require(google-srp);

const srpSettings = {
  "apiKey": process.env.GOOGLE_API_KEY,
  "engineKey": process.env.GOOGLE_ENGINE,
};

googleSrp(srpSettings);
```

## Plugins

### Pagination

```node
google-srp({
    apiKey: [your-key-here],
    engineKey: [your-engine-key-here],
    pagination: true
});
```
