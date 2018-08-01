/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

'use strict';

/* eslint-env node */

const path = require('path');
const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	devtool: 'source-map',
	performance: { hints: false },

	entry: path.resolve(__dirname, 'src', 'insertimage.ts'),

	output: {
		// The name under which the editor will be exported.
		library: 'InsertImagePlugin',

		path: path.resolve(__dirname, 'build'),
		filename: 'insertimage.js',
		libraryTarget: 'commonjs',
		libraryExport: 'default'
	},

  externals: /^@ckeditor\/ckeditor5/,

	optimization: {
		minimizer: [
			new UglifyJsWebpackPlugin({
				sourceMap: true,
				uglifyOptions: {
					output: {
						// Preserve CKEditor 5 license comments.
						comments: /^!/
					}
				}
			})
		]
	},

	resolve: {
		// Add `.ts` and `.tsx` as a resolvable extension.
		extensions: ['.ts', '.tsx', '.js']
	},

	module: {
		rules: [
			{ test: /\.tsx?$/, loader: 'ts-loader' },
			{
				test: /\.svg$/,
				use: ['raw-loader']
			},
		]
	}
};
