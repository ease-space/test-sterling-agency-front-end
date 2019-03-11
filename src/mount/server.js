import Path from 'path';
import Http from 'http';
import Express from 'express';
import Compression from 'compression';
import BodyParser from 'body-parser';
import CookieParser from 'cookie-parser';
import ApiCache from 'apicache';
import Helmet from 'helmet';
import Chalk from 'chalk';
import OpenBrowser from 'react-dev-utils/openBrowser';
import Webpack from 'webpack';
import WebpackDevMiddleware from 'webpack-dev-middleware';
import WebpackHotMiddleware from 'webpack-hot-middleware';
import WebpackHotServerMiddleware from 'webpack-hot-server-middleware';

import configDevClient from '../../webpack/webpack.config.dev.client.babel';
import configDevServer from '../../webpack/webpack.config.dev.server.babel';
import configProdClient from '../../webpack/webpack.config.prod.client.babel';
import configProdServer from '../../webpack/webpack.config.prod.server.babel';

import { constants as build } from '../../webpack/common/constants';

let openedBrowser = false;

const done = (protocolHttp, listenerHttp) => {
  setTimeout(() => {
    const addressHttp = `${protocolHttp}://${listenerHttp.address().address}:${
      listenerHttp.address().port
    }`;
    console.log(
      `Server listening on ${Chalk.inverse.green(
        addressHttp,
      )} in ${Chalk.inverse.red(build.NODE_ENV)} mode 🌎...`,
    );
    if (build.NODE_DEV && build.BUILD_DEV && !openedBrowser) {
      Promise.resolve(OpenBrowser(addressHttp)).then(
        () => (openedBrowser = true),
      );
    }
  }, 1000);
};

const getExpress = () => {
  const cache = ApiCache.options({
    enabled: !build.NODE_DEV,
  }).middleware;

  const app = new Express();
  app.disable('x-powered-by');
  app.use(BodyParser.urlencoded({ extended: false }));
  app.use(BodyParser.json());
  app.use(Helmet());
  app.use(Compression());
  app.use(CookieParser());
  app.use(cache('360 days'));
  return app;
};

const developmentRouter = (resolve, reject) => {
  try {
    const router = Express.Router();
    const compiler = Webpack([configDevClient, configDevServer]);
    const clientCompiler = compiler.compilers.find(
      compiler => compiler.name === 'client',
    );
    const options = {
      hot: true,
      stats: { colors: true },
      publicPath: configDevClient.output.publicPath,
    };
    router.use(WebpackDevMiddleware(compiler, options));
    router.use(WebpackHotMiddleware(clientCompiler));
    router.use(WebpackHotServerMiddleware(compiler));
    const app = getExpress().use(router);
    compiler.hooks.done.tap('done', () => resolve(app));
  } catch (error) {
    reject(error);
  }
};

const productionRouter = (resolve, reject) => {
  try {
    const router = Express.Router();
    router.use(Express.static(configProdClient.output.path));
    const compiler = Webpack([configProdClient, configProdServer]);
    compiler.run((err, stats) => {
      const clientStats = stats.toJson().children[0];
      const render = require(Path.join(
        configProdServer.output.path,
        configProdServer.output.filename,
      )).default;
      router.use(render({ clientStats }));
      console.log(stats.toString({ colors: true }));
      const app = getExpress().use(router);
      resolve(app);
    });
    return router;
  } catch (error) {
    reject(error);
  }
};

const runExpress = (resolve, reject) => {
  if (build.NODE_DEV) {
    return developmentRouter(resolve, reject);
  } else {
    return productionRouter(resolve, reject);
  }
};

const runApp = () => {
  const promise = new Promise((resolve, reject) => {
    runExpress(resolve, reject);
  });
  promise.then(
    app => {
      const httpServer = Http.createServer(app);
      const httpListener = httpServer.listen(build.PORT_HTTP, build.HOST);
      done('http', httpListener);
    },
    error => {
      console.log(error);
    },
  );
};

runApp();
