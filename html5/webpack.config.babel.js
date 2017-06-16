import path from "path";

export default {
	entry: "./public/index.js",
	devServer: {
		port: 1367,
		open: true,
		contentBase: "public"
	},
	devtool: "source-map",
	resolve: {
		extensions: [".js", ".jsx", ".json"]
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				use: {
					loader: "babel-loader"
				},
				include: [path.resolve("./public")]
			}
		]
	}
};