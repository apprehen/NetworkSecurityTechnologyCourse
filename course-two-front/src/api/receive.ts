// 使用websocket接收服务器消息推送
import { wsUrl } from './config'
const userid = 'yueyun'
const ws = new WebSocket(`${wsUrl}?userId=${userid}`)
ws.onopen = () => {
  console.log('连接成功')
}

// expot const getMessa

export default ws
