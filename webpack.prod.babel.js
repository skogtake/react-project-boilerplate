import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import merge from 'webpack-merge';

import baseConfig from './webpack.base.babel';

const strategy = {
	entry: 'prepend',
};

const prodConfig = merge.strategy(strategy)(baseConfig, {
	plugins: [
		new UglifyJsPlugin({
			parallel: true,
			uglifyOptions: {
				ecma: 8,
				warnings: false,
				compress: true,
				mangle: true,
				toplevel: true,
			},
			extractComments: true,
		}),
	],
});

export default prodConfig;
