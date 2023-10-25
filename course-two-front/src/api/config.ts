export const envConfig = {
  // 生产环境
  production: {
    // 服务器地址
    serverUrl: 'http://localhost:4000',
    // 是否开启mock
    mock: false,
    // 是否开启代理
    proxy: false
  },
  // 开发环境
  development: {
    // 服务器地址
    serverUrl: 'http://12a9a870.r3.cpolar.cn',
    // 是否开启mock
    mock: false,
    // 是否开启代理
    proxy: false
  }
}

// export const wsUrl = 'ws://12a9a870.r3.cpolar.cn/connect'
export const wsUrl = 'ws://localhost:4000/connect'
