const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/index.ts",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        // Let webpack handle worker files with Webpack's native syntax
        test: /\.worker\.ts$/,
        use: [
          {
            loader: "worker-loader",
            options: { inline: "no-fallback" }, // or use 'inline' for embedding in bundle
          },
          "ts-loader",
        ],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./src/index.html" }),
  ],
  // 6️⃣ DevTool for debugging
  devtool: "source-map", // shows proper TS file & line in dev tools

  // 7️⃣ Dev Server (optional, for localhost)
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 9000,
  },
};
