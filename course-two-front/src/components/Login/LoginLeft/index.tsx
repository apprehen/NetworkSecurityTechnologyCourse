import React, { useState } from 'react'
import AvaterShow from './AvaterShow'
import Search from './Search'
import ChatSetting from './ChatSetting'
import style from './index.module.css'
const LoginLeft: React.FC = () => {
  const [currentId, setCurrentId] = useState('')
  const data = new Array(5).fill(1)
  const changeShow = (id: string) => {
    console.log('changeShow', id)
    // 更改actived
    setCurrentId(id)
    // 更改右侧的显示
    // 重新渲染
  }
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%'
      }}
    >
      <div className={style.search_wrapper}>
        <Search></Search>
      </div>
      <div className={style.chat_names}>
        {data.map((_, index) => {
          return (
            <div
              key={index}
              style={{
                width: '100%'
              }}
            >
              <AvaterShow
                changeShow={changeShow}
                actived={currentId === index.toString()}
                id={index.toString()}
              ></AvaterShow>
            </div>
          )
        })}
      </div>
      <div className={style.chat_setting}>
        <ChatSetting></ChatSetting>
      </div>
    </div>
  )
}
export default LoginLeft
