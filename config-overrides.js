const { injectBabelPlugin } = require('react-app-rewired');

module.exports = {
   webpack: function override(config, env) {
       // do stuff with the webpack config...
       config = injectBabelPlugin(
           ['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }],
           config,
       );
       return config;
   },
    devServer: function(configFunction) {

        return function (proxy, allowedHost) {
            const config = configFunction(proxy, allowedHost);
            //配置代理,context为代理的相对路径,target为服务器地址
            config.proxy = [
                {
                    context: ['/mock'],
                    target: 'http://127.0.0.1:1111',
                    // pathRewrite: {'^/bms-nrm-web': ''},
                    changeOrigin: true,
                }
            ];

            return config;
        }
    }
};

