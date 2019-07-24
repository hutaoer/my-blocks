const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const config = {
	entry: path.resolve(__dirname, 'src/index.js'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: [{
					loader: 'babel-loader',
					options: {
	          			presets: ['@babel/preset-env'],
	        		}
				}]
			}
		]
	},
	devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: '8080',
        host: 'localhost'
    },
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src/index.html')
		})
	]
}

module.exports = config;