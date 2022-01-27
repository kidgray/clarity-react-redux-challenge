const path = require('path');

module.exports = {
    entry: [
        'core-js/stable',
        'regenerator-runtime/runtime',
        './src/index.js'
    ],
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /(\.js|\.jsx)$/,
                exclude: /node_modules/
            }, 
            {
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ],
                test: /\.s?css$/
            }
        ]
    },
    devtool: 'eval-source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, 'public')
        },
        historyApiFallback: true
    }
};