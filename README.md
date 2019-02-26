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
  "apiKey": [MY_GOOGLE_API_KEY],
  "engineKey": [MY_GOOGLE_ENGINE],
};

googleSrp(srpSettings);
```

## Plugins

### Pagination

```node
const srpSettings = {
    "apiKey": [your-key-here],
    "engineKey": [your-engine-key-here],
    "pagination": true
};
googleSrp(srpSettings);
```
