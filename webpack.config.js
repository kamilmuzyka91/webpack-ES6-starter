const path = require("path");
const webpack = require("webpack"); //to access built-in plugins

module.exports = {
  mode: "development",

  entry: "./src/index.js", // wejście
  output: {
    filename: "main.js", // wyjście
    path: path.resolve(__dirname, "dist/js/"), // wyjście js w tym katalogu
  },

  devServer: {
    static: "./dist", // serwuj wszystkie pliki z tego katalogu
    watchFiles: ["src/**/*.html", "src/**/*.css", "src/**/*.js"],
    hot: true,
    compress: true, // kompresuj wszystko co jest obsługiwane
    port: 3000,
    open: true, // otwórz okno automatycznie
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
