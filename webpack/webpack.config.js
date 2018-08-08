const  path = require('path');
const  webpack = require('webpack');
const  HtmlPlugin = require('html-webpack-plugin');
const  ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const glob = require('glob');
const PurifyCSSPlugin = require('purifycss-webpack');
// const entry={
//     entry:'./src/entry.js'
// };
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
        new PurifyCSSPlugin({
            paths:glob.sync(path.join(__dirname,'src/*.html'))
        }),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextWebpackPlugin('./css/index.css'),
        new HtmlPlugin({
            filename:'a.html',
            chunks:['index'],      //想讓chunks引入哪個js
            minfiy:{
                removeAttributeQuotes:true
            },
            hash:true,
            template:'./src/index.html'
        }),
        new HtmlPlugin({
            chunks:['index2'],
            filename:'b.html',
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
        port:8080,
        hot:true,
        open:true
    },
    module: {
        rules: [
            {

                test:/\.css$/,
                use:['style-loader','css-loader']
                // use:ExtractTextWebpackPlugin.extract({
                //     fallback: "style-loader",
                //     use: [{
                //         loader:"css-loader",
                //         options:{
                //             importLoaders:1
                //         }
                //     },"postcss-loader"]
                // })
            },
            {

                test:/\.scss/,
                // use:['style-loader','css-loader','sass-loader']
                use:ExtractTextWebpackPlugin.extract(
                    {
                        use:[{
                                loader:'css-loader'
                            },{
                                loader:'sass-loader'
                             }
                        ],
                        fallback:'style-loader'
}
                )
            },
            // {
            //              test:/\.(jsx|js)$/,
            //     use: {
            //         loader: "babel-loader",
            //         options: {
            //             presets:[
            //                 'es2015'
            //             ]
            //         }
            //     },
            //    exclude:/node_modules/
            // },
            // new webpack.BannerPlugin('東農')

        ]
    }

}
