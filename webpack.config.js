const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");


const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  mode: isProd ? 'production' : 'development',
  entry: "./src/js/app.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.[contenthash].js",
    clean: true
  },
  devtool: isProd ? 'source-map' : 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource"
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist")
    },
    port: 3000,
    open: true,
    hot: true
  },
  resolve: {
    extensions: [".js"]
  }
};
