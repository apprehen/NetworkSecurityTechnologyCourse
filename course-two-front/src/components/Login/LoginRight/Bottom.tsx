import React from 'react'
import { TextArea } from '@radix-ui/themes'
import useUserInfo from '@/store/userInfo'
import { postMessage, listSession } from '@/api/chat'
// import ws from '@/api/receive'
const Bottom: React.FC = () => {
  const [value, setValue] = React.useState('')
  const { setMessages, name, chatName } = useUserInfo()
  const sendMessage = async () => {
    // 获得输入框的值
    if (value === '') return
    // 发送消息
    try {
      const res = await postMessage(name, chatName, value)
      const res2 = await listSession(name)
      setMessages({
        type: 'send',
        content: value,
        time: new Date().getTime(),
        isMe: true
      })
      console.log('发送消息成功', res, res2)
    } catch (e) {
      console.log(e)
    }
    // 清空输入框
    setValue('')
  }
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        borderTop: '2px solid #999'
      }}
    >
      {/* <div></div> */}
      <TextArea
        variant="classic"
        value={value}
        placeholder="Reply to comment…"
        style={{
          width: '100%',
          border: 'none',
          height: '100%',
          outline: 'none',
          resize: 'none',
          padding: '2px',
          boxSizing: 'border-box',
          borderBottomRightRadius: '15px'
        }}
        onClick={sendMessage}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          // 判断是否按下了回车键
          if (e.key === 'Enter') {
            e.preventDefault()
            console.log('按下了回车键')
            sendMessage()
          }
        }}
      />
    </div>
  )
}

export default Bottom
