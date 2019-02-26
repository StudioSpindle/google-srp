import getJSONResults from '../helpers/getJSONResults';
import elementExists from '../helpers/elementExists';
import createNoResultMessage from './createNoResultMessage';

export default function(
  noResultsElement,
  resultListContainerElement,
  searchResultTemplateElement,
  apiKey,
  engineKey,
  startIndex,
  queryString,
  callback
) {
  const searchResultsPromise = getJSONResults(
    `https://www.googleapis.com/customsearch/v1` +
      `?key=${apiKey}` +
      `&cx=${engineKey}` +
      `&q=${queryString}&hl=en&start=${startIndex}`
  );
  searchResultsPromise
    .then(function(response) {
      const zeroItems = typeof response.items === 'undefined';
      if (zeroItems) {
        if (elementExists(noResultsElement)) {
          const { searchTerms } = response.queries.request[0];
          noResultsElement.innerHTML = createNoResultMessage(searchTerms);
          noResultsElement.style.display = 'flex';
        }
        return;
      }
      callback(response);
    })
    .catch(function(e) {
      console.info(e);
    });
}
