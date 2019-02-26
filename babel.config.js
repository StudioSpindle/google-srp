module.exports = function (api) {
  api.cache(true);

  const plugins = [ 'inline-json-import' ];

  return {
    plugins
  };
};
