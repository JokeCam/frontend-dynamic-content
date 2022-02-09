const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, "src", "index.js"),
    output: {
        path: path.resolve(__dirname, "build"),
    },
    
    devServer: {
        historyApiFallback: true,
    },

    module: {
        rules: [
            {
                test: /\.?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            ["@babel/preset-react", { "runtime": "automatic" }]
                        ],
                        plugins: [
                            [
                                "@babel/plugin-transform-runtime",
                                {
                                    "regenerator": true,
                                }
                            ]
                        ]
                    }
                },
            },
            {
                test: /\.less$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "less-loader",
                ],
            },
            {
                test: /\.css$/i,
                use: [
                    "style-loader",
                    "css-loader",
                ],
            },
            {
                test: /\.(png|jp(e*)g|svg|gif|ico)$/,
                type: "asset/resource",
            },
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "index.html"),
            // favicon: path.join(__dirname, "src", "favicon.ico"),
        }),
    ],
}