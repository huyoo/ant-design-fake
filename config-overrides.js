// const { injectBabelPlugin } = require('react-app-rewired');
// const rewireLess  = require("react-app-rewire-less");
//
// module.exports = {
//    webpack: function override(config, env) {
//        // do stuff with the webpack config...
//
//        // config = rewireMobX(config, env);
//
//
//        config = injectBabelPlugin(
//            ['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }],
//            config,
//        );
//        config = injectBabelPlugin("transform-decorators-legacy", config);
//        config = rewireLess(config, env);
//
//        return config;
//    },
//     devServer: function(configFunction) {
//
//         return function (proxy, allowedHost) {
//             const config = configFunction(proxy, allowedHost);
//             //配置代理,context为代理的相对路径,target为服务器地址
//             config.proxy = [
//                 {
//                     Context: ['/api'],
//                     target: 'http://localhost:1111',
//                     // pathRewrite: {'^/api': ''},
//                     changeOrigin: true,
//                 }
//             ];
//
//             return config;
//         }
//     }
// };
//


const {
	override,
	fixBabelImports,
	addLessLoader,
	addDecoratorsLegacy,
} = require('customize-cra');
const polyfillEntry = () => config => {
	config.entry= ["babel-polyfill",'./src/index.js'];
	return config;
};
module.exports = override(
	fixBabelImports('import', {
		libraryName: 'antd',
		libraryDirectory: 'es',
		style: true,
	}),
	addLessLoader({
		javascriptEnabled: true,
	}),
	addDecoratorsLegacy(),
	polyfillEntry()
);
