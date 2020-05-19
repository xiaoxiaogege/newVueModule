const path = require("path");
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const baseUrl =
  process.env.NODE_ENV === "production" ? "" : "/";
function resolve(dir) {
  return path.join(__dirname, "./", dir);
}
const isProduction = process.env.NODE_ENV === "production";
// 压缩js
const compress = new CompressionWebpackPlugin({
  filename: (info) => {
    return `${info.path}.gz${info.query}`;
  },
  algorithm: "gzip",
  threshold: 10240,
  test: new RegExp("\\.(" + ["js"].join("|") + ")$"),
  minRatio: 0.8,
  deleteOriginalAssets: false,
});
module.exports = {
  assetsDir: "assets",
  outputDir: "dist",
  publicPath: baseUrl,
  lintOnSave: false, // 是否开启编译时是否不符合eslint提示
  /**
   * 生产环境是否生成 sourceMap ,开发环境为true，方便调试，生产环境为false ，加速生产环境构建，优化项目体积大小
   * */
  productionSourceMap: isProduction ? false : true,
  devServer: {
    host: "0.0.0.0", // 解决在局域网下无法访问
    port: 8080,
    proxy: {
      "/api": {
        target: "http://127.0.0.1:8080",
        changeOrigin: true,
      },
    },
    before(app, server) {
      app.get(/.*.(js) | .*.*.(js)$/, (req, res, next) => {
        req.url = req.url + ".gz";
        res.set("Content-Encoding", "gzip");
        next();
      });
    },
  },
  // 压缩代码
  configureWebpack: {
    plugins: [compress],
  },
  // 配置
  chainWebpack: (config) => {
    // 修复HMR
    // config.resolve.symlinks(true);
    // 配置别名
    config.resolve.alias
      .set("@", resolve("src"))
      .set("assets", resolve("src/assets"))
      .set("components", resolve("src/components"))
      .set("router", resolve("src/router"))
      .set("utils", resolve("src/utils"))
      .set("store", resolve("src/store"))
      .set("views", resolve("src/views"));
    // 压缩代码
    config.optimization.minimize(true);
    // 分割代码
    // config.optimization.splitChunks({
    //   chunks: 'all'
    // })
    // 用cdn方式引入
    config.externals({
      vue: "Vue",
      vuex: "Vuex",
      axios: "axios",
    });
  },
  // 引入全局变量
  css: {
    extract: true,
    loaderOptions: {
      // pass options to sass-loader
    },
  },
};
