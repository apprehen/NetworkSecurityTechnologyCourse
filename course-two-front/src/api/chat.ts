import api from './index'

export const postMessage = (
  sender: string,
  receive: string,
  message: string
) => {
  const bodyMessage = message
  // 将message转换成数据流用post body传输
  const blob = new Blob([bodyMessage], { type: 'text/plain' })
  return api.post('/message/send', blob.arrayBuffer, {
    params: {
      senderId: sender,
      receiverId: receive
    }
  })
}

export const listSession = (userId: string) => {
  return api.get('/session/list', {
    params: {
      userId
    }
  })
}

export const pullMessage = (sessionId: string) => {
  return api.get('/message/pull', {
    params: {
      sessionId,
      index: 0
    }
  })
}
