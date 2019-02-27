/**
 * @desc set snippet in innerHTML
 * @param el {*|Node|ActiveX.IXMLDOMNode} the element to add the snippet to
 * @param snippet {string} the snippet to replace the template's search result innerHTML with
 */
export default function(el, snippet) {
  el.getElementsByClassName('search-result__snippet')[0].innerHTML = snippet;
}
