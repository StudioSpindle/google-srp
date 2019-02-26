const settingsResults = {
  resultContainerClassName: "search-result-list",
  searchResultTemplateClassName: "search-result",
  noResultsClassName: "jsNoSearchResults"
};
import elementExists from '../../helpers/elementExists';
import getParameterByName from '../../helpers/getParameterByName';
import generateResults from '../../utilities/generateResults';
import loadResults from '../../utilities/loadResults';
import showNumberOfResults from './showNumberOfResults';
import showUpdatedSearchbox from './showUpdatedSearchbox';
export default function (config) {
  const [noResultsElement] = document.getElementsByClassName(settingsResults.noResultsClassName);
  const [resultListContainerElement] = document.getElementsByClassName(settingsResults.resultContainerClassName);
  const [searchResultTemplateElement] = document.getElementsByClassName(settingsResults.searchResultTemplateClassName);
  const queryString = getParameterByName('search');

  if (queryString !== null && queryString !== '') {
    if (elementExists(noResultsElement)) {
      noResultsElement.style.display = 'none';
    }

    const urlParamIndex = window.location.hash.substring(1);
    const startIndex = urlParamIndex !== '' ? urlParamIndex : 1;
    loadResults(noResultsElement, resultListContainerElement, searchResultTemplateElement, config, startIndex, queryString, function (response) {
      showNumberOfResults(response);
      generateResults(response, resultListContainerElement, searchResultTemplateElement);
      resultListContainerElement.classList.add('search-result-list--fade-in');
      showUpdatedSearchbox(queryString);
    });
  }
}
;