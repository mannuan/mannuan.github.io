const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackInlineChunkPlugin = require('html-webpack-inline-chunk-plugin');
const Webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const Path = require('path');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const SvnInfo = require('svn-info').sync('https://218.106.122.66/svn/application/trunk/gm-ui', 'HEAD');

module.exports = (dirname, options) => {
    let pakageName = Path.basename(Path.join(dirname, '../'));
    return {
        plugins: [
            //混淆代码
            new UglifyJsPlugin({
                sourceMap: true,
                //多线程处理
                parallel: true,
                //使用缓存
                cache: true
            }),
            //提取css文件
            new ExtractTextPlugin({
                filename: '[name]-[hash:5].css'
            }),
            new CleanWebpackPlugin(['dist'], {
                root: Path.join(dirname, '../')
            }),
            new Webpack.NamedChunksPlugin(),
            new Webpack.NamedModulesPlugin(),
            //版本信息
            new Webpack.BannerPlugin({
                banner: `SVNVersion: ${SvnInfo.revision}\nDate: ${new Date().toISOString().slice(0, 10)}`,
                raw: false,
                entryOnly: true,
                include: /\.js/g
            }),
            //压缩文件夹
            new FileManagerPlugin({
                onEnd: {
                    mkdir: [Path.join(dirname, '../package/')],
                    archive: [{
                        source: Path.join(dirname, '../dist'),
                        destination: Path.join(dirname, `../package/${pakageName}.zip`),
                        options: {}
                    }]
                }
            })
        ]
    };
};

