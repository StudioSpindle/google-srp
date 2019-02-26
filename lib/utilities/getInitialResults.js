// TODO: make this the plugin, and refactor the ./src/plugins/results/index.js to the ./src/index.js
import fetchResults from './fetchResults';
export default async function (noResultsElement, apiKey, engineKey, startIndex, queryString) {
  return await fetchResults(noResultsElement, apiKey, engineKey, startIndex, queryString);
}
;