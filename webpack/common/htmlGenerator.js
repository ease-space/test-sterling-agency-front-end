import HtmlWebpackPlugin from 'html-webpack-plugin';

import { constants } from '../../src/core/constants/index';

export const htmlGenerator = () => {
  return new HtmlWebpackPlugin({
    inject: false,
    filename: 'html/index.html',
    title: constants.APP_NAME,
  });
};
