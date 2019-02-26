// TODO: the pagination in this file requires a settings file that shouldn't be here, refactor (see also pagination TODO in this file)
import settingsPagination from '../pagination/settings-pagination.json';
import settingsResults from './settings-results.json';

import elementExists from '../../helpers/elementExists';
import getParameterByName from '../../helpers/getParameterByName';

import generateResults from '../../utilities/generateResults';
import loadResults from '../../utilities/loadResults';

import showNumberOfResults from './showNumberOfResults';
import showUpdatedSearchbox from './showUpdatedSearchbox';
import generatePagination from '../pagination/generatePagination';

export default function(config) {
  const [notifyNoResultsElement] = document.getElementsByClassName(settingsResults.notifyNoResultsClassName);
  const [resultListContainerElement] = document.getElementsByClassName(settingsResults.resultContainerClassName);
  const [searchResultTemplateElement] = document.getElementsByClassName(settingsResults.searchResultTemplateClassName);
  const [notifyBadRequestElement] = document.getElementsByClassName(settingsResults.notifyBadRequestClassName);


  const queryString = getParameterByName('search');
  if (queryString !== null && queryString !== '') {
    if (elementExists(notifyNoResultsElement)) {
      notifyNoResultsElement.style.display = 'none';
    }
    const urlParamIndex = window.location.hash.substring(1);
    const startIndex = urlParamIndex !== '' ? urlParamIndex : 1;

    loadResults(notifyNoResultsElement, notifyBadRequestElement, resultListContainerElement, searchResultTemplateElement, config, startIndex, queryString, function(response) {
      showNumberOfResults(response);
      generateResults(response, resultListContainerElement, searchResultTemplateElement);
      resultListContainerElement.classList.add('search-result-list--fade-in');
      // TODO: decouple this from this initial result script
      if (config.enablePagination) {
        const [paginationContainer] = document.getElementsByClassName(settingsPagination.paginationContainerClassName);
        generatePagination(response, paginationContainer, settingsPagination.nextButtonClassName, settingsPagination.previousButtonClassName, settingsPagination.searchMetaClassName);
      }
      showUpdatedSearchbox(queryString);
    });

  }
};
