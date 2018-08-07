const  path = require('path');
const  webpack = require('webpack');
const  HtmlPlugin = require('html-webpack-plugin');
module.exports = {
    mode :'development',
    entry: {
        'index':'./src/index.js',
        'index2':'./src/index2.js'
    },
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: "[name].js"
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlPlugin({
            filename:'a.html',
            title:"index1",
            chunks:['index11'],
            minfiy:{
                removeAttributeQuotes:true
            },
            hash:true,
            template:'./src/index.html'
        }),
        new HtmlPlugin({
            chunks:['index11'],
            filename:'b.html',
            title:"index2",
            minfiy:{
                removeAttributeQuotes:true
            },
            hash:true,
            template:'./src/index2.html'
        })
    ],
    devServer: {
        contentBase:path.resolve(__dirname,'dist'),
        host:"localhost",
        compress:true,
        port:8081,
        hot:true,
        open:true
    },
    module: {
        rules: [
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            }
        ]
    }

}