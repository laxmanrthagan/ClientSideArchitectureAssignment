const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  plugins: [new ESLintPlugin({
    outputReport: {
       formatter: "HTML",
       filePath: './eslint_report.html',
    },
    extensions: ['js', 'mjs', 'jsx', 'ts', 'tsx'],
    eslintPath: require.resolve('eslint')
           
  })],
  module: {
    rules: [
      { test: /\.css$/, use: "css-loader" },
      { test: /\.css$/, use: "sass-loader" },
      { test: /\.ts$/, use: "ts-loader" },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new HtmlMinimizerPlugin(),
    ],
  },
};
