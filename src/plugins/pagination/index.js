import settingsResults from '../results/settings-results.json';
import settingsPagination from './settings-pagination.json';

import elementExists from '../../helpers/elementExists';

import generateResults from '../../utilities/generateResults';
import loadResults from '../../utilities/loadResults';

import generatePagination from './generatePagination';
import removeSearchResultListItems from './removeSearchResultListItems';

export default function(config) {
  const [notifyNoResultsElement] = document.getElementsByClassName(settingsResults.notifyNoResultsClassName);
  const [resultListContainerElement] = document.getElementsByClassName(settingsResults.resultContainerClassName);
  const [searchResultTemplateElement] = document.getElementsByClassName(settingsResults.searchResultTemplateClassName);
  const [paginationContainer] = document.getElementsByClassName(settingsPagination.paginationContainerClassName);
  const [notifyBadRequestElement] = document.getElementsByClassName(settingsResults.notifyBadRequestClassName);

  if (elementExists(paginationContainer)) {
    paginationContainer.addEventListener(
      'click',
      function(e) {
        if (
          e.target.classList.contains(settingsPagination.nextButtonClassName) ||
          e.target.classList.contains(settingsPagination.previousButtonClassName)
        ) {
          const newStartIndex = e.target.dataset.goToPageIndex;
          resultListContainerElement.classList.remove('search-result-list--fade-in');

          loadResults(notifyNoResultsElement, notifyBadRequestElement, resultListContainerElement, searchResultTemplateElement, config, newStartIndex, queryString, function(response) {
            removeSearchResultListItems(resultListContainerElement);
            setTimeout(function() {
              generateResults(response, resultListContainerElement, searchResultTemplateElement);
              resultListContainerElement.classList.add('search-result-list--fade-in');
              generatePagination(response, paginationContainer, settingsPagination.nextButtonClassName, settingsPagination.previousButtonClassName, settingsPagination.searchMetaClassName);
            }, 250);
            window.location.hash = newStartIndex;
          });
        }
      },
      true,
    );
  } else {
    console.info(`There is no pagination container present with ${settingsPagination.paginationContainerClassName}`);
  }
};
