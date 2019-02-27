import results from './plugins/results/index';
import pagination from './plugins/pagination/index';
import getParameterByName from './helpers/getParameterByName';

export default function(config) {
  const appConfig = {
    apiKey: config.apiKey,
    engineKey: config.engineKey,
    enablePagination: config.pagination || false
  };

  const queryString = getParameterByName('search', window.location.href);

  results(appConfig, queryString);

  if (appConfig.enablePagination) {
    pagination(appConfig, queryString);
  }
}
