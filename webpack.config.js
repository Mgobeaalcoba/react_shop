const path = require('path'); // Nos permite saber donde se está inicializando nuestro proyecto. En nuestra compu, en nuestra notebook, en la compu de un amigo, en un servidor. 
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js', // Donde parte la compilación
    output: {
        path: path.resolve(__dirname, 'dist'), // donde va a publicar lo compilado. En este caso creando una carpeta llamada dist (es por convención ese nombre el mas usado. Puede ser build y otros tmb)
        filename: 'bundle.js',
    },
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
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: '/index.html'
        })
    ]
}