import React from 'react'
// import useUserInfo from '@/store/userInfo'
import LoginLeft from '@/components/Login/LoginLeft/index'
import LoginRight from '@/components/Login/LoginRight'
import style from './index.module.css'
const Chat: React.FC = () => {
  // const { chatName, name } = useUserInfo()
  return (
    <div className={style.login_Wrapper}>
      {/* <p>聊天界面</p> */}
      <div className={style.login_left}>
        <LoginLeft></LoginLeft>
      </div>
      <div className={style.login_right}>
        <LoginRight></LoginRight>
      </div>
    </div>
  )
}

export default Chat
