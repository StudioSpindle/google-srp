/**
 * @desc Generates the pagination, and adds the index to next and previous button.
 * @param response {Object} the response out of the XML HttpRequest
 */

import elementExists from '../../helpers/elementExists';

export default function(
  response,
  paginationContainer,
  nextButtonClassName,
  previousButtonClassName,
  searchMetaClassName
) {
  const [nextButton] = document.getElementsByClassName(nextButtonClassName);
  const [previousButton] = document.getElementsByClassName(
    previousButtonClassName
  );
  const [paginationSearchMeta] = document.getElementsByClassName(
    searchMetaClassName
  );
  const queries = response.queries;
  const nextPage = queries.nextPage;
  const previousPage = queries.previousPage;
  if (elementExists(paginationContainer)) {
    paginationContainer.style.display = 'flex';
    if (nextPage) {
      nextButton.style.display = 'flex';
      nextButton.dataset.goToPageIndex = nextPage[0].startIndex;
    } else {
      nextButton.style.display = 'none';
    }
    if (previousPage) {
      previousButton.style.display = 'flex';
      previousButton.dataset.goToPageIndex = previousPage[0].startIndex;
    } else {
      previousButton.style.display = 'none';
    }
  }
  if (elementExists(paginationSearchMeta)) {
    const [countContainer] = paginationSearchMeta.getElementsByClassName(
      'search-meta--count'
    );
    const [countTotal] = paginationSearchMeta.getElementsByClassName(
      'search-meta--total'
    );
    const queryInfo = response.queries.request[0];
    const startNumber = queryInfo.startIndex;
    const endNumber = queryInfo.count;
    countContainer.innerHTML = startNumber;
    countTotal.innerHTML = startNumber + endNumber - 1;
  }
}
