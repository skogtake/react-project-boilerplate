import path from 'path';

const baseConfig = {
    context: path.resolve(__dirname, 'client'),
    entry: ['./index.js'],
    output: {
        path: path.join(__dirname, '/public'),
        filename: 'bundle.js',
    },
    devtool: 'eval-source-map',
    watchOptions: {
        poll: true,
        ignored: /node_modules/,
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
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                loader: 'file-loader',
            },
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.json'],
    },
};

export default baseConfig;
