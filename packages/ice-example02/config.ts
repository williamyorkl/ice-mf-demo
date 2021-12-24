const config = {
    vite: false,
    vendor: false,
    // eslint-disable-next-line @iceworks/best-practices/no-http-url
    devPublicPath: 'http://localhost:8111/',
    moduleFederation: {
      // name：必传且唯一，作为关键名称用于第三方引用，相当于一个alias，引用方式 name/{expose}
      name: 'lihuaAssamblyUI',
      // 声明全局变量
      library: { type: 'umd', name: 'lihuaAssamblyUI' },
      // 打包构建后chunk的模块名 (目前所在路径是 packages/ui/dist/remoteEntry.js)
      filename: 'remoteEntry.js',
      // 🏁 为被引用方最关键的配置项，用于暴露对外提供的modules模块
      exposes: {
          './TestCmp': './src/components/TestCmp'
      },
      shared: {
        react: { eager: true, requiredVersion: '17.x' },
        'react-dom': { eager: true, requiredVersion: '17.x' }
      } // 声明共享的第三方资源
    },
};

module.exports = config;