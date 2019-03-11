import WebappWebpackPlugin from 'webapp-webpack-plugin';

import { constants } from '../../src/core/constants/index';
import { paths } from './paths';

export const faviconGenerator = () => {
  return new WebappWebpackPlugin({
    logo: paths.LOGO,
    prefix: 'icons/',
    inject: 'force',
    favicons: {
      appName: constants.APP_NAME,
      background: '#00000000',
      theme_color: '#FFFFFF',
      icons: {
        android: true,
        appleIcon: true,
        appleStartup: true,
        coast: true,
        favicons: true,
        firefox: true,
        windows: true,
        yandex: true,
      },
    },
  });
};
