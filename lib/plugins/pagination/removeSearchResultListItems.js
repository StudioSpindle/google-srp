/**
 * @desc Removes all list items except the first since that's the template.
 */
export default function (resultListContainerElement) {
  const results = resultListContainerElement.getElementsByClassName('search-result');

  while (results[1]) results[1].parentNode.removeChild(results[1]);
}