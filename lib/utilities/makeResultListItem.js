/**
 * @desc clone (hidden) template element (list-item) for re-use in new search results
 * @param template {object}
 * @returns {*|Node|ActiveX.IXMLDOMNode}
 */
export default function (template) {
  const clone = template.cloneNode(true);
  clone.style.display = 'flex';
  return clone;
}