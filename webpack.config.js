const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");
const path = require('path')

module.exports = env =>
{
    env = env || {};
    return {
        mode: env.prod ? "production" : "development",
        entry: "./resources/js/src/main.js",
        output: {
            path: path.resolve(__dirname, './resources/js/dist'),
            filename: 'sticky-footer.js',
        },
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    loader: 'vue-loader',
                    options: {
                        loaders: {
                            css: [
                                'vue-style-loader',
                                'css-loader'
                            ]
                        }
                    }
                },
                {
                    test: /\.js$/,
                    loader: 'babel-loader'
                },
                {
                    test: /\.css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                        }
                    ]
                }
            ]
        },
        plugins: [
            new VueLoaderPlugin(),
            new MiniCssExtractPlugin({
                chunkFilename: 'sticky-footer.css'
            }),
        ]
    }
}
