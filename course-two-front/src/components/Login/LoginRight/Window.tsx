import React, { useEffect } from 'react'
import useUserInfo from '@/store/userInfo'
interface IProps {
  messages: any
}
const Window: React.FC<IProps> = (props) => {
  const { getMessages, setMessages, chatMessages } = useUserInfo()
  useEffect(() => {
    // 滑动到底部
    const dom = document.getElementById('window')
    // 具有动画效果的滚动 滚动到最底部
    dom?.scrollTo({
      behavior: 'smooth',
      top: dom.scrollHeight + 100
    })
  }, [getMessages()])
  // 接受消息不使用useEffect
  return (
    <div
      style={{
        width: '100%',
        height: '100%'
      }}
    >
      {getMessages().map((item: any, index: any) => {
        return (
          <div
            key={index}
            style={{
              width: '100%',
              height: 'auto',
              display: 'flex',
              justifyContent: item.isMe ? 'flex-end' : 'flex-start',
              alignItems: 'center',
              padding: '10px 20px',
              boxSizing: 'border-box'
            }}
          >
            <div
              style={{
                width: 'auto',
                height: 'auto',
                maxWidth: '70%',
                background: item.isMe ? '#0099ff' : '#eee',
                borderRadius: '10px',
                padding: '10px',
                color: item.isMe ? '#fff' : '#000',
                fontSize: '14px',
                lineHeight: '20px',
                wordWrap: 'break-word'
              }}
            >
              {item.content}
            </div>
          </div>
        )
      })}
      <div></div>
    </div>
  )
}

export default Window
