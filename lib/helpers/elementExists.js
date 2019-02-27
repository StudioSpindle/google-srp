/**
 * @desc use to check if an element exists
 * @param element {*|Node|ActiveX.IXMLDOMNode} the element to check existence of
 * @returns {boolean}
 */
export default element => {
  return typeof element != 'undefined' && element != null;
};
