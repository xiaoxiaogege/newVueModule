//获取环境变量，判断是否为生成环境
const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  publicPath: isProduction ? "" : "./", // 构建好的文件输出到哪里

  outputDir: "dist1", // where to put static assets (js/css/img/font/...) // 是否在保存时使用‘eslint-loader’进行检查 // 有效值: true | false | 'error' // 当设置为‘error’时，检查出的错误会触发编译失败

  lintOnSave: true, // 使用带有浏览器内编译器的完整构建版本 // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only

  runtimeCompiler: false, // babel-loader默认会跳过`node_modules`依赖. // 通过这个选项可以显示转译一个依赖

  transpileDependencies: [
    /* string or regex */
  ], 
  // 是否为生产环境构建生成sourceMap?
  productionSourceMap: false, // 调整内部的webpack配置. // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md

  chainWebpack: (config) => {
    config.optimization.minimize(true);
    config.optimization.splitChunks({
      chunks: 'all'
    })
    // 用cdn方式引入
    config.externals({
      'vue': 'Vue',
      'vuex': 'Vuex',
      'vue-router': 'VueRouter',
      'mint-ui': 'MINT',  // 需用MINT
      'axios': 'axios'
    })
    // 移除 prefetch 插件
    config.plugins.delete("prefetch");
    // 移除 preload 插件
    config.plugins.delete("preload");
    // 压缩代码
    config.optimization.minimize(true);
    // 分割代码
    config.optimization.splitChunks({
      chunks: "all",
    });
    config.module
      .rule("images")
      .use("url-loader")
      .loader("url-loader")
      .tap((options) => Object.assign(options, { limit: 5120 }));//将小于 5kb 的资源内联，以减少 HTTP 请求，大于则会加上hash值打包在img文件夹中
  },
  //webpack 相关
  configureWebpack: (config) => {
    if (isProduction) {
      // 为生产环境修改配置...
    } else {
      // 为开发环境修改配置...
    }
  }, 
  css:{
    extract: true
  },

  // use thread-loader for babel & TS in production build // enabled by default if the machine has more than 1 cores

  parallel: require("os").cpus().length > 1, // PWA 插件相关配置 // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa

  pwa: {}, // configure webpack-dev-server behavior

  devServer: {
    open: process.platform === "darwin",

    disableHostCheck: false,

    // host: "192.168.2.57",

    // port: 9000,

    https: false,

    hotOnly: false, // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#configuring-proxy

    proxy: null, // string | Object

    // before: app => {}
  }, // 第三方插件配置

  pluginOptions: {
    // ...
  },
};
