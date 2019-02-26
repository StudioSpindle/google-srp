/**
 * @desc Add the (decoded) query in the input field of the search field
 * @param query {object} the query
 */
import elementExists from '../../helpers/elementExists';
export default function (query) {
  const searchBox = document.getElementById('search-knowledgebase');

  if (elementExists(searchBox)) {
    searchBox.value = decodeURIComponent(`${query}`.replace(/\+/g, '%20'));
  }
}