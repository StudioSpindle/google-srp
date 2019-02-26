
import results from './plugins/results/index';
import pagination from './plugins/pagination/index';

export default function(config) {
  const appConfig = {
    apiKey: config.apiKey,
    engineKey: config.engineKey,
    enablePagination: config.pagination || false
  };

  results(appConfig);

  if (config.enablePagination) {
    pagination(appConfig);
  }
}
