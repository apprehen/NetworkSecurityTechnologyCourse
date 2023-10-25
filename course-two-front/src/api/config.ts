export const envConfig = {
  // 生产环境
  production: {
    // 服务器地址
    serverUrl: 'http://localhost:3000',
    // 是否开启mock
    mock: false,
    // 是否开启代理
    proxy: false
  },
  // 开发环境
  development: {
    // 服务器地址
    serverUrl: 'http://6dafdcce.r3.cpolar.cn',
    // 是否开启mock
    mock: false,
    // 是否开启代理
    proxy: false
  }
}

export const wsUrl = 'ws://6dafdcce.r3.cpolar.cn/connect'
