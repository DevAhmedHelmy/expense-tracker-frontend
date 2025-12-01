const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/js/app.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.[contenthash].js",
    clean: true
  },
  module: {
    rules: [
        { test: /\.css$/, use: ["style-loader", "css-loader"] }
    ]
  },
   plugins: [
    new HtmlWebpackPlugin({ template: './dist/index.html' }),
   ]
};
