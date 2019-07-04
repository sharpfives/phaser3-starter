const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
	mode: 'production',
	devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    publicPath: '/',
    host: '127.0.0.1',
    port: 8080,
    open: true
  }
});