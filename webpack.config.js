const path = require('path'); // Nos permite saber donde se está inicializando nuestro proyecto. En nuestra compu, en nuestra notebook, en la compu de un amigo, en un servidor. 
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    entry: './src/index.js', // Donde parte la compilación
    output: {
        path: path.resolve(__dirname, 'dist'), // donde va a publicar lo compilado. En este caso creando una carpeta llamada dist (es por convención ese nombre el mas usado. Puede ser build y otros tmb)
        filename: 'bundle.js',
    },
    mode: 'development',
    resolve: {
        extensions: ['.js','.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
            watch: true
        },
        watchFiles: path.join(__dirname, "./**"), 
        compress: true,
        historyApiFallback: true,
        port: 3006,
        open: true, 
    },
}