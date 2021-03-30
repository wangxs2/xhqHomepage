const path = require('path')



module.exports = {
  lintOnSave: false, //如果为false，就是取消eslint规则的检查
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        // eslint-disable-next-line no-undef
        // path.resolve(__dirname, 'src/assets/css/index.less')
      ]
    }
  }
}
