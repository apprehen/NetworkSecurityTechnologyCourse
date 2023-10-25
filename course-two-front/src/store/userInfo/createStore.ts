import { create } from 'zustand'
import { userInfo } from './initState'
const useUserInfo = create((set: any, get: any) => ({
  ...userInfo,
  // 获得用户信息中的name
  getName: () => get().name,
  // 通过set方法修改用户信息中的name
  setName: (name: string) => set({ name }),
  // 获得用户信息中的chatName
  getChatName: () => get().chatName,
  // 通过set方法修改用户信息中的chatName
  setChatName: (chatName: string) => set({ chatName }),
  // 获得用户信息中的isLogin
  getIsLogin: () => get().isLogin,
  // 通过set方法修改用户信息中的isLogin
  setIsLogin: (isLogin: boolean) => set({ isLogin }),
  // ... 其他的get和set方法
  getChatNames: () => get().chatNames,
  setChatNames: (chatNames: string[]) =>
    set({
      ...get().chatNames,
      chatNames
    }),
  getMessages: () => get().chatMessages,
  setMessages: (message: any) =>
    set({
      chatMessages: [...get().chatMessages, message]
    })
}))

export default useUserInfo
