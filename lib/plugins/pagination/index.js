/**
 * TODO: this can be removed
 */

/**
 *
 * @param paginationContainer {*|Node|ActiveX.IXMLDOMNode} The container element of the pagination
 * @param nextButtonClassName
 * @param previousButtonClassName
 */
export default function (paginationContainer, nextButtonClassName, previousButtonClassName) {
  paginationContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains(nextButtonClassName) || e.target.classList.contains(previousButtonClassName)) {
      const newStartIndex = e.target.dataset.goToPageIndex;
      const newSearchResultsPromise = getJSONResults(`https://www.googleapis.com/customsearch/v1` + `?key=${process.env.GOOGLE_API_KEY}` + `&cx=${process.env.GOOGLE_ENGINE}` + `&q=${queryString}&hl=en&start=${newStartIndex}`);
      resultListContainerElement.classList.remove('search-result-list--fade-in');
      newSearchResultsPromise.then(function (response) {
        removeSearchResultsListItems(); // timeout for animation to finish

        setTimeout(function () {
          generateResults(response);
          resultListContainerElement.classList.add('search-result-list--fade-in');
          generatePagination(response);
        }, 250);
        window.location.hash = newStartIndex;
      }).catch(function (e) {
        console.info(e);
      });
    }
  }, true);
}