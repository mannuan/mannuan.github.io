const Webpack = require('webpack');

module.exports = (dirname, options) => {
    let gtUIPath = options.gtUIPath;
    return {
        devServer: {
            port: '9090',
            overlay: true,
            //设置为false则会在页面中显示当前webpack的状态
            inline: true,
            historyApiFallback: true,
            //代理配置
            proxy: {
                '/gt-ui': {
                    target: gtUIPath,
                    changeOrigin: true,
                    logLevel: 'debug',
                    headers: {}
                }
            },
            hot: true,
            //强制页面不通过刷新页面更新文件
            hotOnly: true
        },
        plugins: [
            //模块热更新插件
            new Webpack.HotModuleReplacementPlugin(),
            //使用HMR时显示模块的相对路径
            new Webpack.NamedModulesPlugin()
        ]
    };
};
