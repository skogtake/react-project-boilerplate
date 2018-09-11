import webpack from 'webpack';
import merge from 'webpack-merge';
import path from 'path';

import baseConfig from './webpack.base.babel';

const strategy = {
	entry: 'prepend',
};

const devConfig = merge.strategy(strategy)(baseConfig, {
	entry: ['react-hot-loader/patch'],
	devtool: 'eval-source-map',
	plugins: [new webpack.HotModuleReplacementPlugin()],
	devServer: {
		hot: true,
		contentBase: path.join(__dirname, 'public'),
		historyApiFallback: true,
	},
});

export default devConfig;
