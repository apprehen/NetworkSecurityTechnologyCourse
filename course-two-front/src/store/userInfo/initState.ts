/**
 * 负责 State -- 添加状态类型和初始化状态
 * */
export const userInfo = {
  isLogin: false,
  name: '',
  chatName: '',
  chatNames: [],
  chatMessages: [
    {
      type: 'send',
      content: '你好啊',
      time: new Date().getTime(),
      isMe: true
    },
    {
      type: 'receive',
      content: '你好',
      time: new Date().getTime(),
      isMe: false
    },
    {
      type: 'send',
      content: '你是谁',
      time: new Date().getTime(),
      isMe: true
    }
  ]
}
