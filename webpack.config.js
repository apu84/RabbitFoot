const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  context: __dirname + '/',
  entry: ['./src/app.module.ts', './styles/scss/main.scss'],
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: "./dist",
    hot: true
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    loaders: [
      {test: /\.ts$/, loader: 'ts-loader'},
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',

          // Could also be write as follow:
          // use: 'css-loader?modules&importLoader=2&sourceMap&localIdentName=[name]__[local]___[hash:base64:5]!sass-loader'
          use: [
            {
              loader: 'css-loader',
              query: {
                modules: true,
                sourceMap: true,
                importLoaders: 2,
                localIdentName: '[name]__[local]___[hash:base64:5]'
              }
            },
            'sass-loader'
          ]
        })
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              // See https://github.com/kangax/html-minifier#options-quick-reference for options for html-minifier.
              // The first two regex'es are the defaults.
              // /{{[^}]*}}/ preserves angular's {{ ... }} syntax in HTML templates.
              ignoreCustomFragments: [
                /<%[\\s\\S]*?%>/,
                /<\\?[\\s\\S]*?\\?>/,
                /{{[^}]*}}/
              ]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([{
      from: './src/*.html',
      to: __dirname + '/dist',
      flatten: true
    }]),
    new ExtractTextPlugin({filename:"style.css"})
  ]
};