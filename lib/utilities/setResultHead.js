/**
 * @desc set title and URL
 * @param el {*|Node|ActiveX.IXMLDOMNode} the element to set it on
 * @param title {string} the title to set as title
 * @param link {string} the link to set in the link
 * @param formattedUrl {string} a formatted url to set in the link
 */
export default function (el, title, link, formattedUrl) {
  el.getElementsByClassName('search-result__title')[0].innerHTML = `<a href="${link}" target="_self">${title}</a>`;
  el.getElementsByClassName('search-result__url')[0].innerHTML = `<a href="${link}" target="_self">${formattedUrl}</a>`;
}