const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js"
  },
  devServer: {
    // 静态文件根目录
    contentBase: path.join(__dirname, "public"),
    // 不压缩
    compress: false,
    port: 8080,
    // 虚拟路径
    publicPath: "/phk/"
  }

}