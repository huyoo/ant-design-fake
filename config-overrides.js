
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
