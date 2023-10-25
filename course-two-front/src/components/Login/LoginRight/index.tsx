import React from 'react'
import Top from './Top'
import Window from './Window'
import Bottom from './Bottom'
import style from './index.module.css'
const LoginRight: React.FC = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <div className={style.chat_right_top}>
        <Top></Top>
      </div>
      <div className={style.chat_right_middle} id="window">
        <Window></Window>
      </div>
      <div className={style.chat_right_bottom}>
        <Bottom></Bottom>
      </div>
    </div>
  )
}

export default LoginRight
