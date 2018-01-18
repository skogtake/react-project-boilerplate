const path = require('path');

module.exports = {
    entry: './src/client.js',
    output: {
        path: path.join(__dirname, '/public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['env', 'react'],
                },
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    'css-loader',
                    'style-loader',
                ],
            },
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.json']
    }
};
