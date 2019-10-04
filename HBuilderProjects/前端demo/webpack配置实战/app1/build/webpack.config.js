const Path = require('path');
const wepackMerge = require('webpack-merge');
const commonConfig = require('../../build/common/webpack.common.config.js');

module.exports = env => {
    //通用配置
    let pConfig = commonConfig(env, __dirname, {
        form: true,
        //配置开发环境中框架的访问地址
        gtUIPath: 'http://localhost:8020/'
    });

    //基于通用配置的调整配置
    let modifyConfig = {
        resolve: {
            alias: {
                mainCtrl: Path.join(__dirname, '../controllers/main-ctrl')
            }
        }
    };

    //返回合并后的配置
    return wepackMerge(pConfig, modifyConfig);
};

