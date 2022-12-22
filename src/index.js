const applyConfig = (config) => {
  const serverConfig =
    typeof __SERVER__ !== 'undefined' && __SERVER__
      ? require('./server').default
      : false;

  if (serverConfig) {
    config.settings.expressMiddleware = [
      ...config.settings.expressMiddleware,
      ...serverConfig,
    ];
  }

  return config;
};

export default applyConfig;
