# google-srp 
Search Results Page plugin for the Google [Custom Search JSON API](https://developers.google.com/custom-search/v1/overview).

Prior to using this package [create a custom search engine](https://developers.google.com/custom-search/docs/tutorial/creatingcse).

- **MY_GOOGLE_API_KEY**: In the [gcse control panel](https://cse.google.com/cse/all) copy your *search engine id* (under the 'Basics' tab).
- **MY_GOOGLE_ENGINE**: create a API credential as described on [developers.google.com](https://developers.google.com/custom-search/v1/introduction).

## :construction: pre-alpha

This is a pre-alpha release. No formal testing has been applied yet.

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
    <div class="search-notify-no-results">
        <p>Nothing found, please search for something else.</p>
    </div>
    <div class="search-notify-bad-request" style="display:none">
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

