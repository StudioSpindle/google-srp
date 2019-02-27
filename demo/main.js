
const googleSRP = require('../lib/index');

const srpSettings = {
  "apiKey": process.env.GOOGLE_API_KEY,
  "engineKey": process.env.GOOGLE_ENGINE,
  "pagination": true
};

googleSRP.searchResultsPage(srpSettings);
