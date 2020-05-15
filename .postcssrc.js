module.exports = {
  "plugins": {
    'autoprefixer': {
      // browsers: ['Android >= 4.0', 'iOS >= 7']
    },
    'postcss-pxtorem': {
      rootValue: 75,
      propList: ['*'],
      selectorBlackList: [".van"] // 设置class忽略开头，以.van开头的class会被忽略转化，这里是忽略有赞ui的
    }
  }
}