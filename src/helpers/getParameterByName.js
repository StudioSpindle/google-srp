/**
 * getParameterByName
 * @desc get the query param by name
 * @param name {string} the name of the parameter to get
 * @param url {string} the entire URL of the page
 * @returns {*}
 */
const getParameterByName = (name, url) => {
  const cleanName = name.replace(/[[\]]/g, '\\$&');
  const regex = new RegExp(`[?&]${cleanName}(=([^&#]*)|&|#|$)`);
  const results = regex.exec(url);
  if (!results) {
    return null;
  }
  if (!results[2]) {
    return '';
  }
  return decodeURIComponent(results[2].replace('/+/g', ' '));
};

export default getParameterByName;
