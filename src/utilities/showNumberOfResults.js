/**
 * @desc Show the number of total results.
 * @param response {Object} the response out of the XML HttpRequest
 */

import elementExists from '../helpers/elementExists';

export default function(response) {
  const totalResults = response.searchInformation.formattedTotalResults;
  const [amountOfResultsElement] = document.getElementsByClassName(
    'number-of-results'
  );
  if (elementExists(amountOfResultsElement)) {
    amountOfResultsElement.innerHTML = `(${totalResults})`;
  }
}
