const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
})

module.exports = {
  devServer: {
    open: true,
  },
  // 启用忽略 key error
  // lintOnSave: false,
}
