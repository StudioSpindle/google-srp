/**
 * TODO: refactor name and location
 * TODO: add description
 * TODO: refactor functions with the same parameters across two main sections
 */
const config = {
  resultContainerClassName: "search-result-list",
  searchResultTemplateClassName: "search-result",
  noResultsClassName: "jsNoSearchResults",
  paginationContainerClassName: "pagination",
  nextButtonClassName: "pagination__button-next",
  previousButtonClassName: "pagination__button-previous",
  searchMetaClassName: "pagination-search-meta"
};
import elementExists from '../../helpers/elementExists';
import getParameterByName from '../../helpers/getParameterByName';
import generatePagination from '../../utilities/generatePagination';
import generateResults from '../../utilities/generateResults';
import showNumberOfResults from '../../utilities/showNumberOfResults';
import showUpdatedSearchbox from '../../utilities/showUpdatedSearchbox';
import initResults from '../../utilities/initResults';
import removeSearchResultListItems from '../../../lib/utilities/removeSearchResultListItems';
/**
 *
 * @param apiKey {string}
 * @param engineKey {string}
 * @param enablePagination {Boolean}
 */

export default function (settings) {
  const apiKey = settings.apiKey;
  const engineKey = settings.engineKey;
  const enablePagination = settings.pagination || false;
  const [noResultsElement] = document.getElementsByClassName(config.noResultsClassName);
  const [resultListContainerElement] = document.getElementsByClassName(config.resultContainerClassName);
  const [searchResultTemplateElement] = document.getElementsByClassName(config.searchResultTemplateClassName); // TODO: refactor this into separate 'initial results' plugin

  const queryString = getParameterByName('search');

  if (queryString !== null && queryString !== '') {
    if (elementExists(noResultsElement)) {
      noResultsElement.style.display = 'none';
    }

    const urlParamIndex = window.location.hash.substring(1);
    const startIndex = urlParamIndex !== '' ? urlParamIndex : 1; // TODO: refactor the parameters (they shouldn't all be set each time)
    // TODO: rename this (and next occurance below) to a more correct name

    initResults(noResultsElement, resultListContainerElement, searchResultTemplateElement, apiKey, engineKey, startIndex, queryString, function (response) {
      showNumberOfResults(response);
      generateResults(response, resultListContainerElement, searchResultTemplateElement);
      resultListContainerElement.classList.add('search-result-list--fade-in'); // TODO: register custom event on this location, use this in the pagination function block below

      if (enablePagination) {
        const [paginationContainer] = document.getElementsByClassName(config.paginationContainerClassName);
        generatePagination(response, paginationContainer, config.nextButtonClassName, config.previousButtonClassName, config.searchMetaClassName);
      }

      showUpdatedSearchbox(queryString);
    });
  } // TODO: Refactor this into 'separate pagination' plugin function


  if (enablePagination) {
    const [paginationContainer] = document.getElementsByClassName(config.paginationContainerClassName);

    if (elementExists(paginationContainer)) {
      paginationContainer.addEventListener('click', function (e) {
        if (e.target.classList.contains(config.nextButtonClassName) || e.target.classList.contains(config.previousButtonClassName)) {
          const newStartIndex = e.target.dataset.goToPageIndex;
          resultListContainerElement.classList.remove('search-result-list--fade-in');
          initResults(noResultsElement, resultListContainerElement, searchResultTemplateElement, apiKey, engineKey, newStartIndex, queryString, function (response) {
            removeSearchResultListItems(resultListContainerElement);
            setTimeout(function () {
              generateResults(response, resultListContainerElement, searchResultTemplateElement);
              resultListContainerElement.classList.add('search-result-list--fade-in');
              generatePagination(response, paginationContainer, config.nextButtonClassName, config.previousButtonClassName, config.searchMetaClassName);
            }, 250);
            window.location.hash = newStartIndex;
          });
        }
      }, true);
    } else {
      console.info(`There is no pagination container present with ${config.paginationContainerClassName}`);
    }
  }
}
;