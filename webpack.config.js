const HtmlWebpackPlugin = require('html-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const WebpackPwaManifest = require('webpack-pwa-manifest')
const webpack = require('webpack')

module.exports = (env, { mode }) => {
	const config = {
		module: {
			rules: [
				{
					test: /\.js$/, 
					exclude: /node_modules/, 
					use: {
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env', '@babel/preset-react'],
							plugins: ['@babel/plugin-transform-runtime']
						}
					}
				},
				{
					test: /\.css$/,
					use: ['style-loader', 'raw-loader']
				}
			]
		},
		plugins: [ new HtmlWebpackPlugin({ template: './src/index.html' }) ]
	}
	if (mode === 'development') {
		const { cnpj_url, cnpj_token, continue_url, pay, pay_token, mapbox_api } = require('./credentials')
		config.devtool = 'cheap-module-eval-source-map'
		config.devServer = { historyApiFallback: true }
		config.plugins.push(
			new webpack.DefinePlugin({
				'process.env': {
					CNPJ_URL: JSON.stringify(cnpj_url),
					CNPJ_TOKEN: JSON.stringify(cnpj_token),
					CONTINUE_URL: JSON.stringify(continue_url),
					PAY: JSON.stringify(pay),
					PAY_TOKEN: JSON.stringify(pay_token),
					MAPBOX_API: JSON.stringify(mapbox_api)
				}
			})
		)
	}
	if (mode === 'production') {
		config.devtool = 'cheap-module-source-map'
		config.plugins.push(
			new CompressionPlugin(),
			new CopyWebpackPlugin([
				{ from: './_redirects', to: '_redirects', toType: 'file' },
				{ from: './src/sw.js', to: 'sw.js', toType: 'file' }
			]),
			new WebpackPwaManifest({
				name: 'Ziro App',
				short_name: 'Ziro',
				start_url: '/',
				background_color: '#FFF',
				theme_color: '#FFF',
				display: 'standalone',
				icons: [{ src: './logo.png', sizes: [96, 128, 192, 256, 384, 512] }]
			}),
			new webpack.DefinePlugin({
				'process.env': {
					CNPJ_URL: JSON.stringify(process.env.CNPJ_URL),
					CNPJ_TOKEN: JSON.stringify(process.env.CNPJ_TOKEN),
					CONTINUE_URL: JSON.stringify(process.env.CONTINUE_URL),
					PAY: JSON.stringify(process.env.PAY),
					PAY_TOKEN: JSON.stringify(process.env.PAY_TOKEN),
					MAPBOX_API: JSON.stringify(process.env.MAPBOX_API)
				}
			})
		)
	}
	return config
}