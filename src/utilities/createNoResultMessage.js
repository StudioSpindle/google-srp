/**
 * @param terms {string} search term that was used
 * @returns {string}
 */
export default function(terms) {
  return `<p>No results found for query <strong>'${terms}'</strong>. Please search for something else.</p>`;
}
