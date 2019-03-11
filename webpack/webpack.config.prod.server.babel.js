import Webpack from 'webpack';

import { externals } from './common/externals';
import { paths } from './common/paths';
import { postCssLoader } from './common/postCssLoader';

const serverConfig = () => {
  return {
    name: 'server',
    mode: 'production',
    target: 'node',
    node: {
      __filename: false,
      __dirname: false,
    },
    externals: externals,
    entry: paths.ENTRY_SERVER,
    output: {
      filename: 'prod-server-bundle.js',
      path: paths.OUTPUT_SERVER,
      libraryTarget: 'commonjs2',
      publicPath: paths.PUBLIC_SERVER,
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          use: ['babel-loader'],
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: 'css-loader',
              options: {
                exportOnlyLocals: true,
              },
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
                name: '[name]-[hash].[ext]',
                outputPath: 'images',
                emitFile: false,
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
                name: '[name]-[hash].[ext]',
                outputPath: 'fonts',
                emitFile: false,
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new Webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1,
      }),
    ],
    devtool: 'cheap-source-map',
  };
};

export default serverConfig();
