# google-srp 
Search Results Page plugin for the Google [Custom Search JSON API](https://developers.google.com/custom-search/v1/overview).

Prior to using this package [create a custom search engine](https://developers.google.com/custom-search/docs/tutorial/creatingcse). When the engine is created lookup the engine key and create an API key:  

- **MY_GOOGLE_ENGINE**: In the [gcse control panel](https://cse.google.com/cse/all) copy your *search engine id* (under the 'Basics' tab).
- **MY_GOOGLE_API_KEY**: create a API credential as described on [developers.google.com](https://developers.google.com/custom-search/v1/introduction).

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
    <form action="/" class="search" method="GET">
        <section class="search-meta">
            <label class="is-visually-hidden" for="search-website">Search our website</label>
            <input placeholder="Search our website"
                   id="search-website"
                   name="search"
                   type="search" />
            <button class="button button-ui" type="submit" value="Submit">Search</button>
        </section>
    </form>
    <h1>Search results <span class="number-of-results"></span></h1>
    <div class="search-notify-no-results">
        <p>Nothing found, please search for something else.</p>
    </div>
    <div class="search-notify-bad-request" style="display:none">
        <p>Currently there is a problem loading the google script. Please come back later.</p>
    </div>
</section>
<ul class="search-result-list">
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
<!-- add this below the search-result-list list HTML markup above -->
<ul class="pagination" style="display:none;">
    <li><button class="pagination__button pagination__button-previous" style="display:none;">&laquo; Previous page</button></li>
    <li class="pagination-search-meta">
        <p>Showing result <strong class="search-meta--count">0</strong> to <strong class="search-meta--total">0</strong></p>
    </li>
    <li><button class="pagination__button pagination__button-next" style="display:none;">Next page &raquo;</button></li>
</ul>
```

## Code

### ES6

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

### Code formatting

To check formatting use (used on CI): 

```bash
$ npm run prettier:check
```

To automatically fix formatting use:

```bash
$ npm run prettier:fix
```
