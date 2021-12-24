const config = {
    vite: false,
    moduleFederation: {
        name: 'lihuaAssamblyEditor',
        remotes: {
          // 🏁 作为引用方最关键的配置项，用于声明需要引用的远程资源包的名称与模块名称
          // TODO -  配置 测试/生成 域名
          lihuaAssamblyUI: 'lihuaAssamblyUI@http://localhost:8111/remoteEntry.js'
        },
        shared: {
          react: { singleton: true, eager: true, requiredVersion: '17.x' },
          'react-dom': { singleton: true, eager: true, requiredVersion: '17.x' }
        }
    }
};


module.exports = config;
