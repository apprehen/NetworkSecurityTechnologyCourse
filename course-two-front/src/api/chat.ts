import api from './index'

export const postMessage = (
  sender: string,
  receive: string,
  message: string
) => {
  return api.post('/message/send', message, {
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
