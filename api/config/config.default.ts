import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

exports.cors = {
  origin: '*',
  allowMethods: 'GET, POST, PUT, DELETE, HEAD, PATCH'
}

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1652777040392_241';

  // add your egg config in here
  config.middleware = [];

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  config.cors = {
    origin: () => "*",
    allowMethods: 'GET, POST, PUT, DELETE, HEAD, PATCH',
    credentials: true
  }
  config.security = {
    csrf: {
      enable: false
    }
  }

  const userConfig = {
    APP_KEY: '6fa4b00e9c8c155dbab9dc4b94411569',
    API: {
      GET_NEWS_LIST: "http://v.juhe.cn/toutiao/index"
    }
  }
  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
    ...userConfig
  };
};