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

googleSrp.searchResultsPage(srpSettings);
```

Then in the HTML, add the following markup:

```html
<section>
    <h1>Search results <span class="number-of-results"></span></h1>
    <div class="jsNoSearchResults">
        <p>Nothing found, please search for something else.</p>
    </div>
    <div class="js-search-google-403" style="display:none">
        <p>Currently there is a problem loading the google script. Please come back later.</p>
    </div>
</section>
<ul class="search-result-list list-ui">
    <li class="search-result" style="display: none">
        <h2 class="search-result__title"></h2>
        <span class="search-result__url"></span>
        <p class="search-result__snippet">Result</p>
    </li>
</ul>
```

## Plugins

### Pagination

```node
const srpSettings = {
    "apiKey": [your-key-here],
    "engineKey": [your-engine-key-here],
    "pagination": true
};
googleSrp.searchResultsPage(srpSettings);
```

```html
<ul class="pagination list-ui" style="display:none;">
    <li><button class="pagination__button pagination__button-previous" style="display:none;">&laquo; Previous page</button></li>
    <li class="pagination-search-meta">
        <p>Showing result <strong class="search-meta--count">0</strong> to <strong class="search-meta--total">0</strong></p>
    </li>
    <li><button class="pagination__button pagination__button-next" style="display:none;">Next page &raquo;</button></li>
</ul>
```

