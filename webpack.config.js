const webpack = require('webpack');
const path = require('path');
const AssetsPlugin = require('assets-webpack-plugin');

module.exports = {
  stats: { assets: true, children: false, chunks: false, modules: false, source: false },
  entry: {
    bundle: path.join(__dirname, 'index.web.js'),
  },
  plugins: [
    new webpack.DefinePlugin({
      'typeof __DEV__': JSON.stringify('boolean'),
      '__DEV__': JSON.stringify(true),
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
  ],
  resolve: {
    extensions: ['.js', '.json', '.android.js', '.ios.js'],
    alias: { 'react-native': 'react-native-web' },
    modules: ['web_modules', 'node_modules'],
  },
  module: {
    rules: [
      {
        exclude: [
          /\.html$/,
          /\.(js|jsx)$/,
          /\.css$/,
          /\.json$/,
          /\.svg$/,
        ],
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'media/[name].[hash:8].[ext]',
            emitFile: true,
          },
        }],
      },
      {
        test: /\.(js|jsx)$/,
        include: [
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'node_modules/@zto/zrn-js')
        ],
        use: [
          {
            loader: 'babel-loader',

            options: {
              cacheDirectory: true,
              plugins: [
                "babel-plugin-react-native-web"
              ],
            },
          },
          {
            loader: 'source-map-loader',
          },
        ],
      },
      {
        test: /\.json$/,
        use: 'json-loader',
      },
      {
        test: /\.svg$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: 'media/[name].[hash:8].[ext]',
            emitFile: true,
          },
        }],
      },
    ],
  },
  devServer: {
    host: '0.0.0.0',
    inline:true,
    port: 8090,
  },
  output: {
    libraryTarget: 'umd',
    filename: 'build.js',
    chunkFilename: 'build.js',
  },
  devtool: 'inline-source-map',
}