const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./src/app.js",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
	},
	/**Plugins */
	plugins: [
		/**HTML Webpack Plugin */
		new HtmlWebpackPlugin({
			template: "./src/index.html",
			filename: "index.html",
		}),
	],
	module: {
		rules: [
			/**Style and css loader */
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader", "postcss-loader"],
			},
			/**file-loader*/
			{
				test: /\.(png|jpg|jpeg|ico)$/i,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "[name].[ext]",
							outputPath: "images",
							publicPath: "images",
							emitFile: true,
						},
					},
				],
			},
		],
	},
};
