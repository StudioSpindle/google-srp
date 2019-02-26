import settingsResults from './settings-results.json';

import elementExists from '../../helpers/elementExists';
import getParameterByName from '../../helpers/getParameterByName';

import generateResults from '../../utilities/generateResults';
import loadResults from '../../utilities/loadResults';

import showNumberOfResults from './showNumberOfResults';
import showUpdatedSearchbox from './showUpdatedSearchbox';
import generatePagination from '../pagination/generatePagination';

export default function(config) {
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

    loadResults(noResultsElement, resultListContainerElement, searchResultTemplateElement, config, startIndex, queryString, function(response) {
      showNumberOfResults(response);
      generateResults(response, resultListContainerElement, searchResultTemplateElement);
      resultListContainerElement.classList.add('search-result-list--fade-in');
      // TODO: decouple this from this inital result script
      if (config.enablePagination) {
        const [paginationContainer] = document.getElementsByClassName(settingsResults.paginationContainerClassName);
        generatePagination(response, paginationContainer, settingsResults.nextButtonClassName, settingsResults.previousButtonClassName, settingsResults.searchMetaClassName);
      }
      showUpdatedSearchbox(queryString);
    });

  }
};
