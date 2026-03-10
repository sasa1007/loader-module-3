const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: ['vuetify'],
  css: {
    extract: false
  },
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => {
        return {
          ...options,
          compilerOptions: {
            ...options.compilerOptions,
            isCustomElement: tag => tag.startsWith('v-')
          }
        }
      })
  }
})
