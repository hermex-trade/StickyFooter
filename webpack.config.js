const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path')

module.exports = env =>
{
    env = env || {};
    return {
        mode: env.prod ? "production" : "development",
        entry: "./resources/js/src/main.js",
        output: {
            filename: "sticky-footer" + (env.prod ? "-min" : "") + ".js",
            path: path.resolve(__dirname, './resources/js/dist')
        },
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    loader: 'vue-loader'
                },
                {
                    test: /\.js$/,
                    loader: 'babel-loader'
                },
                {
                    test: /\.css$/,
                    use: [
                        'vue-style-loader',
                        'css-loader'
                    ]
                }
            ]
        },
        plugins: [
            // make sure to include the plugin for the magic
            new VueLoaderPlugin()
        ]
    }
}
