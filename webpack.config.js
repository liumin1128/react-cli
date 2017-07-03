const { resolve } = require('path');
// const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = (options = {}) => {
  return {
    entry: './src/index.js',
    output: {
      path: resolve(__dirname, 'dist'),
      filename: '[name].js',
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader', 'eslint-loader'],
        },
        {
          test: /favicon.(png|ico)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]?[hash]',
              },
            },
          ],
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {           // 如果没有options这个选项将会报错 No PostCSS Config found
                plugins: () => [
                  // require('postcss-import')({ root: loader.resourcePath }),
                  autoprefixer({ browsers: ['last 5 versions'] }), // CSS浏览器兼容
                  // require('cssnano')(),  // 压缩css
                ],
              },
            },
          ],
        },
        {
          test: /\.less$/,
          use: [
            'style-loader',
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {           // 如果没有options这个选项将会报错 No PostCSS Config found
                plugins: () => [
                  // require('postcss-import')({ root: loader.resourcePath }),
                  autoprefixer({ browsers: ['last 5 versions'] }), // CSS浏览器兼容
                  // require('cssnano')(),  // 压缩css
                ],
              },
            },
            'less-loader',
          ],
        },
        {
          test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
          exclude: /favicon.png$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 10000,
              },
            },
          ],
        },
      ],
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
    ],
    devServer: {
      // hot: true,
      port: 8000,
      host: 'localhost',
      historyApiFallback: true,
    },
    performance: {
      hints: options.dev ? false : 'warning',
    },
  };
};
