import React, { useEffect, useState } from 'react'
import style from './index.module.css'
import Window from './Window'
import { wsUrl } from '@/api/config'
import useUserInfo from '@/store/userInfo'
const WebSocketMessage: React.FC = () => {
  const { getName } = useUserInfo()
  const name = getName()
  const [ws] = useState<any>(new WebSocket(wsUrl + `?userId=${name}`))
  const [messages, setMessages] = useState<any>([])
  useEffect(() => {
    // setWs(new WebSocket(wsUrl + `?userId=${name}`))
    ws.addEventListener('open', () => {
      console.log('连接成功')
    })
    ws.addEventListener('close', () => {
      console.log('连接关闭')
    })
    ws.addEventListener('error', () => {
      console.log('连接错误')
    })
  })
  // 能一直监听服务器推送的消息
  useEffect(() => {
    ws.addEventListener('message', (e: any) => {
      console.log('接收到服务器推送的消息', e.data)
      // const data = JSON.parse(e.data)
      setMessages((messages: any) => [...messages, '你好'])
    })
  })
  return (
    <div className={style.chat_right_middle}>
      {ws && <Window messages={messages}></Window>}
    </div>
  )
}

export default WebSocketMessage
