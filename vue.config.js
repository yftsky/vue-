// vue.config.js
const path = require('path')
const px2rem = require('postcss-px2rem')

/* 根据指定目录名得到根目录的绝对路径 */
function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {

  // runtimeCompiler: true,
   lintOnSave: false, // 关闭EsLint的规则
  css: { // 添加postcss配置
    loaderOptions: {
      postcss: {
        plugins: [
          px2rem({
            remUnit: 37.5   // 设计稿等分后的rem值   375/10
          })
        ]
      }
    }
  },

  devServer: {
    host: '0.0.0.0',
    port: 8080,
    open: true,
    proxy: {
      '/4000': { // 匹配所有以 '/api'开头的请求路径
        target: 'http://localhost:4000', // 代理目标的基础路径
        changeOrigin: true, // 支持跨域
        pathRewrite: { // 重写路径: 去掉路径中开头的'/api'
          '^/4000': ''
        }
      },
    }
  },

  /* 编写webpack支持的配置 */
  configureWebpack: { // 内部写webpack原生配置
    resolve: {
      extensions: ['.js', '.vue', '.json'], // 可以省略的后缀名
      alias: { // 路径别名(简写方式)
        // 'vue$': 'vue/dist/vue.esm.js',  // 表示精准匹配   带vue编译器
        '@': path.resolve(__dirname, 'src'),
        '@components': path.resolve(__dirname, 'src/components'),
      }
    }
  },

  pluginOptions: {
    // 配置i18n插件
    i18n: {
      locale: 'zh_CN',
      fallbackLocale: 'zh_CN',
      localeDir: 'locales',
      enableInSFC: false
    }
  }
}
