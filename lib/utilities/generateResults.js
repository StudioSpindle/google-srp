/**
 * @desc Generates the results and appends them to the resultListContainer
 * @param response {Object} the response out of the XML HttpRequest
 * @param parentNode {Object} the parent node where child nodes should be appended to
 */
import searchResultsListItems from './searchResultListItems';
export default function(response, parentNode, template) {
  const searchResultListItems = searchResultsListItems(response, template);
  searchResultListItems.forEach(item => {
    parentNode.appendChild(item);
  });
}
