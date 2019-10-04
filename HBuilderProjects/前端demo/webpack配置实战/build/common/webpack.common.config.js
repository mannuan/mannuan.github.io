const wepackMerge = require('webpack-merge');
const Path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

const ProdConfig = require('./webpack.prod.config');
const DevConfig = require('./webpack.dev.config');

//根据条件处理相关配置
const genarateConfig = (env, dirname, options) => {
    //样式loader
    let cssLoader = [{
        loader: 'css-loader',
        options: {
            sourceMap: true
        }
    }, {
        loader: 'postcss-loader',
        options: {
            ident: 'postcss',
            plugins: [
                require('postcss-cssnext')()
            ],
            sourceMap: true
        }
    }, {
        loader: 'less-loader',
        options: {
            sourceMap: true
        }
    }];
    let styleLoader = [{
        test: /\.(css|less)$/,
        // exclude: /(node_modules|bower_components)/,
        use: env === 'prod' ? ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: cssLoader
        }) : [{
            loader: 'style-loader',
            options: {
                sourceMap: true
            }
        }].concat(cssLoader)
    }];

    //脚本loader
    let jsLoader = [{
        test: /\.js$/,
        exclude: /(node_modules|bower_components|(\.exec\.js))/,
        use: [{
            loader: 'babel-loader'
        }].concat(env === 'dev' ? [{
            loader: 'eslint-loader'
        }] : [])
    }, {
        test: /\.exec\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
            loader: 'script-loader'
        }
    }];

    //文件处理loader
    let fileLoaderOptions = {
        useRelativePath: false,
        name: '[name]-[hash:5].[ext]',
        publicPath: '../'
    };
    if (env === 'prod') {
        fileLoaderOptions.limit = 8000;
    }
    let fileLoader = [{
        test: /\.(pdf)$/,
        exclude: /(node_modules|bower_components)/,
        use: [{
            loader: 'file-loader',
            options: env === 'dev' ? fileLoaderOptions : Object.assign({}, fileLoaderOptions, {
                outputPath: '../dist/pdf',
                publicPath: './pdf'
            })
        }]
    }, {
        test: /\.(jpg|jpeg|png|icon|gif)$/,
        exclude: /(node_modules|bower_components)/,
        use: [{
            loader: env === 'dev' ? 'file-loader' : 'url-loader',
            options: env === 'dev' ? fileLoaderOptions : Object.assign({}, fileLoaderOptions, {
                outputPath: '../dist/img',
                publicPath: './img'
            })
        }]
    }, {
        //解析字体文件
        test: /\.(eot|svg|ttf|woff2?)$/,
        exclude: /(node_modules|bower_components)/,
        use: [{
            loader: env === 'dev' ? 'file-loader' : 'url-loader',
            options: env === 'dev' ? fileLoaderOptions : Object.assign({}, fileLoaderOptions, {
                outputPath: '../dist/fonts',
                publicPath: './fonts'
            })
        }]
    }, {
        //解析主页面和页面上的图片
        test: /\.(html)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
            loader: 'html-loader',
            options: {
                attrs: ['img:src', 'img:data-src'],
                minimize: true
            }
        }
    }];

    //webpack插件
    let plugins = [];

    //HtmlWebpackPlugin 插件
    let htmlWebpacks = [new HtmlWebpackPlugin({
        template: Path.join(dirname, '../index.ejs'),
        inject: true,
        filename: 'index.html',
        chunks: ['index', 'loader'],
        chunksSortMode: function (item1, item2) {
            //先加载loader
            if (item1.id === 'loader') {
                return -1;
            } else {
                return 1;
            }
        }
    })];
    options.form === true && htmlWebpacks.push(new HtmlWebpackPlugin({
        template: Path.join(dirname, '../forms/index.ejs'),
        inject: true,
        filename: 'forms/index.html',
        chunks: ['form', 'formLoader'],
        chunksSortMode: function (item1, item2) {
            //先加载loader
            if (item1.id === 'formLoader') {
                return -1;
            } else {
                return 1;
            }
        }
    }));

    htmlWebpacks = options.htmlWebpackPlugins || htmlWebpacks;
    plugins = plugins.concat(htmlWebpacks);

    //复制资源
    let copyPlugins = [
        new CopyWebpackPlugin([{
            from: './views',
            to: 'views/'
        }, {
            from: './test',
            to: 'test/'
        }], {
            ignore: ['**/.svn/**']
        })
    ];
    options.form === true && copyPlugins.push(new CopyWebpackPlugin([{
        from: './forms/views',
        to: 'forms/views'
    }], {
        ignore: ['**/.svn/**']
    }));

    copyPlugins = options.copyPlugins || copyPlugins;

    plugins = plugins.concat(copyPlugins);

    //全局变量定义
    plugins.push(new Webpack.DefinePlugin({
        WEBPACK_DEBUG: env === 'dev'
    }));

    //友好提示插件
    plugins.push(new FriendlyErrorsPlugin());
    //不打包默认加载项
    plugins.push(new Webpack.IgnorePlugin(/^\.\/locale$/, /moment$/));

    let entry = {
        loader: './loader.js',
        index: './index.js'
    };

    options.form === true && (entry.form = './forms/index.js', entry.formLoader = './forms/loader.js');
    entry = options.entry == null ? entry : options.entry;

    let config = {
        devtool: 'source-map',
        context: Path.join(dirname, '../'),
        entry: entry,
        output: {
            path: Path.join(dirname, '../dist/'),
            filename: env === 'dev' ? '[name]-[hash:5].bundle.js' : '[name]-[chunkhash:5].bundle.js'
        },
        module: {
            rules: [].concat(styleLoader).concat(jsLoader).concat(fileLoader)
        },
        plugins: plugins
    };
    return config;
};

module.exports = (env, dirname, options) => {
    options = options == null ? {} : options;
    var config = env === 'dev' ? DevConfig(dirname, options) : ProdConfig(dirname, options);
    return wepackMerge(genarateConfig(env, dirname, options), config);
};

