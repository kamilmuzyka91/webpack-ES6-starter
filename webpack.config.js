const path = require("path");
const webpack = require("webpack");
module.exports = {
  mode: "development",

  entry: "./src/index.js", //
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist/js/"),
  },

  devServer: {
    static: "./dist",
    watchFiles: ["src/**/*.html", "src/**/*.css", "src/**/*.js"],
    hot: true,
    compress: true,
    port: 3000,
    open: true,
  },

  module: {
    rules: [
      { test: /\.txt$/, use: "raw-loader" },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
};
