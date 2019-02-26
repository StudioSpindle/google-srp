/**
 * @desc Returns promise based on XMLHttpRequest
 * @param url {string}
 * @returns {Promise<any>}
 */
export default function (url) {
  return new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = handleResponse;

    xhr.onerror = function (error) {
      reject(error);
    };

    xhr.send();

    function handleResponse() {
      if (this.readyState === this.DONE) {
        if (this.status === 200) {
          resolve(JSON.parse(this.responseText));
        } else {
          reject(this.statusText);
        }
      }
    }
  });
}