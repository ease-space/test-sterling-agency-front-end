import Path from 'path';
import Fs from 'fs';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import CreateMemoryHistory from 'history/createMemoryHistory';
import Serialize from 'serialize-javascript';
import { flushChunkNames } from 'react-universal-component/server';
import flushChunks from 'webpack-flush-chunks';

import IntlProvider from '../containers/IntlProvider/index';
import App from '../containers/App';

import { configureStore } from '../flux-saga/store/index.js';
import {
  getSettingsFromReg,
  getAuthTokenFromReg,
  extractLanguagesFromReq,
  guessLanguages,
} from '../core/functions';

import { constants } from '../core/constants/index';

import { initialState as initialStateSettings } from '../flux-saga/bus/ui/settings/reducers';
import { initialState as initialStateUser } from '../flux-saga/bus/fetch/user/reducers';

export default ({ clientStats }) => (req, res) => {
  const settings = getSettingsFromReg(req);
  const userLocales = extractLanguagesFromReq(req, settings);
  const language = guessLanguages(
    constants.SUPPORTED_LANGUAGES,
    userLocales,
    constants.DEFAULT_LANGUAGE,
  );
  const token = getAuthTokenFromReg(req) || 'token_yurri_maystrenko';

  const generateDocument = (
    template,
    { html, helmet, css, bundle, storeState },
  ) => {
    template = template.replace(
      '<html>',
      `<html ${helmet.htmlAttributes.toString()}>`,
    );
    template = template.replace(
      '</head>',
      `${helmet.title.toString()}
      ${helmet.meta.toString()}
      ${helmet.link.toString()}
      ${helmet.script.toString()}
      ${helmet.noscript.toString()}
      ${helmet.style.toString()}
      ${css}</head>`,
    );
    template = template.replace(
      '<body>',
      `<body ${helmet.bodyAttributes.toString()}>`,
    );
    template = template.replace(
      '</body>',
      `<div id="appMountPoint">${html}</div><script id="initialState">window.__INITIAL_STATE__=${storeState}</script>${bundle}</body>`,
    );
    return template;
  };

  const memoryHistory = CreateMemoryHistory({
    initialEntries: [req.url],
  });

  const initialState = {
    ui: {
      settings: {
        ...initialStateSettings({ language }),
      },
    },
    fetch: {
      user: {
        ...initialStateUser({ token }),
      },
    },
  };

  const store = configureStore(memoryHistory, initialState);
  store.runSagas().then(() => {
    let context = {};

    const html = renderToString(
      <Provider store={store}>
        <IntlProvider>
          <StaticRouter location={req.url} context={context}>
            <App />
          </StaticRouter>
        </IntlProvider>
      </Provider>,
    );

    const storeState = Serialize(store.getState());

    store.close();

    const { styles: css, js: bundle } = flushChunks(clientStats, {
      chunkNames: flushChunkNames(),
    });

    const helmet = Helmet.renderStatic();

    if (context.url) {
      return res.redirect(302, context.url);
    }

    const htmlPath = Path.resolve(__dirname, '../', 'client/html/index.html');
    Fs.readFile(htmlPath, 'utf8', (error, template) => {
      if (error) {
        res.send(error);
      } else {
        res.send(
          generateDocument(template, {
            html,
            helmet,
            css,
            bundle,
            storeState,
          }),
        );
      }
    });
  });
};
