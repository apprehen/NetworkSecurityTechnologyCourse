const WebSocket = require('ws')
// const url = 'ws://localhost:8080'
const wss = new WebSocket.Server({ port: 8080 })

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    console.log(`Received message => ${message}`)
  })
  ws.send('Hello! Message From Server!!')
})

// 每10s向客户端发送消息
setInterval(() => {
  wss.clients.forEach((client) => {
    client.send(`Hello! Message From Server!! ${Date.now()}`)
  })
}, 10000)
