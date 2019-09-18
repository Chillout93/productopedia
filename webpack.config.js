const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, "./public/dist"),
        publicPath: "public",
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            },
            {
                test: /\.css$/i,
                use: "css-loader"
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    plugins: [new CompressionPlugin()]
};