/**
 * @param response
 * @returns {*}
 */
import makeResultListItem from './makeResultListItem';
import setResultHead from './setResultHead';
import setResultSnippet from './setResultSnippet';
export default function(response, template) {
  const { items } = response;
  const hasResults = typeof items !== 'undefined';

  if (hasResults) {
    const myMap = new Map();
    items.forEach((item, i) => {
      const clone = makeResultListItem(template);
      setResultHead(clone, item.htmlTitle, item.link, item.htmlFormattedUrl);
      setResultSnippet(clone, item.htmlSnippet);
      myMap.set(i, clone);
    });
    return myMap;
  }
}
