const HtmlWebpackPlugin = require('html-webpack-plugin')
// const webpack = require('webpack')

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
							presets: ['@babel/preset-env', '@babel/preset-react']
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
		config.devtool = 'cheap-module-eval-source-map'
		// config.output = { publicPath: '/' }
		// config.devServer = { historyApiFallback: true }
	}
	if (mode === 'production') {
		config.devtool = 'cheap-module-source-map'
		// config.plugins.push(
		// 	new WebpackPwaManifest({
		// 		name: 'Ziro App',
		// 		short_name: 'Ziro',
		// 		start_url: '/',
		// 		background_color: '#FFF',
		// 		theme_color: '#FFF',
		// 		display: 'standalone',
		// 		icons: [{ src: './logo.png', sizes: [96, 128, 192, 256, 384, 512] }]
		// 	}),
		// 	new CopyWebpackPlugin([{ from: './_redirects', to: '_redirects', toType: 'file' }])
			// new webpack.DefinePlugin({
			// 	'process.env': {
			// 		DATA_SHEET_URL: JSON.stringify(process.env.DATA_SHEET_URL),
			// 		API_URL: JSON.stringify(process.env.API_URL)
			// 	}
			// })
		// )
	}
	return config
}