import Webpack from 'webpack';
import ExtractCssChunks from 'extract-css-chunks-webpack-plugin';
import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import CssNano from 'cssnano';
import TerserPlugin from 'terser-webpack-plugin';

import { paths } from './common/paths';
import { faviconGenerator } from './common/faviconGenerator';
import { htmlGenerator } from './common/htmlGenerator';
import { postCssLoader } from './common/postCssLoader';
import { imageMin } from './common/imageMin';

const clientConfig = () => {
  return {
    name: 'client',
    mode: 'production',
    target: 'web',
    entry: paths.ENTRY_CLIENT,
    output: {
      filename: 'js/[name]-[contenthash]-bundle.js',
      path: paths.OUTPUT_CLIENT,
      publicPath: paths.PUBLIC_CLIENT,
    },
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        chunks: 'all',
        automaticNameDelimiter: '-',
        maxInitialRequests: Infinity,
        minSize: 0,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              const packageName = module.context.match(
                /[\\/]node_modules[\\/](.*?)([\\/]|$)/,
              )[1];
              return `vendor-${packageName.replace('@', '')}`;
            },
          },
        },
      },
      minimizer: [new TerserPlugin()],
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
                name: '[name]-[hash].[ext]',
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
                name: '[name]-[hash].[ext]',
                outputPath: 'fonts',
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new Webpack.ProgressPlugin(),
      new ExtractCssChunks({
        filename: 'css/[name]-[contenthash].css',
      }),
      new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.css$/,
        cssProcessor: CssNano,
        cssProcessorOptions: { discardComments: { removeAll: true } },
        canPrint: true,
      }),
      imageMin(),
      htmlGenerator(),
      faviconGenerator(),
    ],
    devtool: 'cheap-source-map',
  };
};

export default clientConfig();
