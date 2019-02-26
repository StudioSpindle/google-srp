// TODO: make this the plugin, and refactor the ./src/plugins/results/index.js to the ./src/index.js
import getFromGoogleAPI from './getFromGoogleAPI';
export default async function (noResultsElement, apiKey, engineKey, startIndex, queryString) {
  return await getFromGoogleAPI(noResultsElement, apiKey, engineKey, startIndex, queryString);
}
;