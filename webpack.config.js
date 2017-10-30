const pa = require('path');
const wp = require('webpack');

const plugins = [
	new wp.DefinePlugin({
		'process.env': {
			FOO: 'firstFOO',
			BAR: 'firstBAR'
		},
	}),
];

const morePlugins = [
	new wp.DefinePlugin({
		'process.env': {
			FOO: 'moreFOO',
			BAZ: 'moreBAZ'
		},
	}),
];

module.exports = {
	entry: './entry.js',
	output: {
		path: pa.join(__dirname, 'output'),
		filename: 'bundle.js',
	},
	plugins: plugins.concat(morePlugins),
};
