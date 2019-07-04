const path = require('path');
const phaser = path.join(__dirname, './node_modules/phaser/dist/phaser.js');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main-game.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      { test: /\.ts$/, loader: 'ts-loader', exclude: '/node_modules/' },
      { test: /phaser\.js$/, loader: 'expose-loader?Phaser' }
    ]
	},
	plugins: [
    new CopyPlugin([
      { from: 'resources', to: 'resources' },
      { from: 'src/index.html', to: '' },
		]),
		new CleanWebpackPlugin()
  ],
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      phaser: phaser
    }
  }
};