const path = require("path");
const merge = require("webpack-merge");
const webpackConfig = require("./webpack.config");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = merge(webpackConfig, {
  devtool: "source-map",

  output: {
    path: path.join(__dirname, "build"),
    filename: "[name].[contenthash].js"
  },

  plugins: [new CleanWebpackPlugin(), new OptimizeCssAssetsPlugin()]
});
