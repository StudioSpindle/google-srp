import getJSONResults from '../helpers/getJSONResults';
import elementExists from '../helpers/elementExists';
import createNoResultMessage from './createNoResultMessage';

export default function(
  notifyNoResultsElement,
  notifyBadRequestElement,
  resultListContainerElement,
  searchResultTemplateElement,
  config,
  startIndex,
  queryString,
  callback
) {
  const searchResultsPromise = getJSONResults(
    `https://www.googleapis.com/customsearch/v1` +
      `?key=${config.apiKey}` +
      `&cx=${config.engineKey}` +
      `&q=${queryString}&hl=en&start=${startIndex}`
  );
  searchResultsPromise
    .then(function(response) {
      const zeroItems = typeof response.items === 'undefined';
      if (zeroItems) {
        if (elementExists(notifyNoResultsElement)) {
          const { searchTerms } = response.queries.request[0];
          notifyNoResultsElement.innerHTML = createNoResultMessage(searchTerms);
          notifyNoResultsElement.style.display = 'flex';
        }
        return;
      }
      callback(response);
    })
    .catch(function(e) {
      if (elementExists(notifyBadRequestElement)) {
        notifyBadRequestElement.style.display = 'flex';
      }
      console.info(e);
    });
}
