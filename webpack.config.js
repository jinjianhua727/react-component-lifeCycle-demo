var webpack = require('webpack');
var extractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');

module.exports = {
	// context: __dirname + '/src',
	entry: "./index.js",
	module: {
		loaders: [
			{
				test: /\.js?$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader',
				query: {
				  presets: ['react', 'es2015']
				}
			}
		]
	},
	output: {
		path: __dirname + '/dist/js/',
		filename : 'bundle.js'
	},
	// plugins : [
	// 	new webpack.optimize.UglifyJsPlugin({
	//       output: {
	//         comments: false,
	//       },
	//       compress: {
	//         warnings: false
	//       }
	//     }),
	//     new webpack.DefinePlugin({
 //         'process.env': {
 //             NODE_ENV: JSON.stringify(process.env.NODE_ENV)
 //         }
         
 //       })
	// ]
}