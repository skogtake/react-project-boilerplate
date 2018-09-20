import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import OfflinePlugin from 'offline-plugin';
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
		new OfflinePlugin({
			caches: {
				main: ['bundle.js', 'index.html'],
				additional: [':externals:'],
				optional: [':rest:'],
			},
			ServiceWorker: {
				events: true,
				navigateFallbackURL: '/',
			},

			AppCache: {
				events: true,
				FALLBACK: {
					'/': '/index.html',
				},
			},
		}),
	],
});

export default prodConfig;
