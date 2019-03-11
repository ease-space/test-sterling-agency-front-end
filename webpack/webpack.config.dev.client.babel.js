import Webpack from 'webpack';
import ExtractCssChunks from 'extract-css-chunks-webpack-plugin';
import StylelintWebpackPlugin from 'stylelint-webpack-plugin';
import WriteFilePlugin from 'write-file-webpack-plugin';

import { paths } from './common/paths';
import { faviconGenerator } from './common/faviconGenerator';
import { htmlGenerator } from './common/htmlGenerator';
import { postCssLoader } from './common/postCssLoader';
import { imageMin } from './common/imageMin';

const clientConfig = () => {
  return {
    name: 'client',
    mode: 'development',
    target: 'web',
    entry: ['webpack-hot-middleware/client', paths.ENTRY_CLIENT],
    output: {
      filename: 'js/main-bundle.js',
      path: paths.OUTPUT_CLIENT,
      publicPath: paths.PUBLIC_CLIENT,
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          use: ['babel-loader', 'eslint-loader'],
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: [
            ExtractCssChunks.loader,
            {
              loader: 'css-loader',
            },
            postCssLoader(),
          ],
        },
        {
          test: /\.(png|jpg|jpeg|gif|svg)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'images',
              },
            },
          ],
        },
        {
          test: /\.(woff2|ttf|woff|eot)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'fonts',
              },
            },
          ],
        },
      ],
    },
    resolve: {
      alias: {
        'react-dom': '@hot-loader/react-dom',
      },
    },
    plugins: [
      new Webpack.ProgressPlugin(),
      new ExtractCssChunks({
        filename: 'css/[name].css',
        hot: true,
      }),
      new StylelintWebpackPlugin({
        configFile: paths.STYLELINT,
        files: '**/*.css',
      }),
      new WriteFilePlugin(),
      imageMin(),
      htmlGenerator(),
      faviconGenerator(),
      new Webpack.HotModuleReplacementPlugin(),
    ],
    devtool: 'cheap-eval-source-map',
  };
};

export default clientConfig();
