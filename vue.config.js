const { defineConfig } = require('@vue/cli-service')
const VueAutoRoutingPlugin = require('vue-auto-routing/lib/webpack-plugin')

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      require('unplugin-vue-components/webpack').default({
        dts: true,
      }),
      new VueAutoRoutingPlugin({
        // Path to the directory that contains your page components.
        pages: 'src/pages',
  
        // A string that will be added to importing component path (default @/pages/).
        importPrefix: '@/pages/'
      })
    ],
  },
  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  },
  publicPath: process.env.NODE_ENV === 'production'
  ? '/genshin-app/'
  : '/'
})
