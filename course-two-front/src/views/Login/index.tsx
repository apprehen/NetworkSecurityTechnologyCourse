import React from 'react'
import * as Tabs from '@radix-ui/react-tabs'
import './styles.css'
import useUserInfo from '@/store/userInfo'
const Login: React.FC = () => {
  const { setIsLogin, setChatName, setName } = useUserInfo()
  const goChat = () => {
    // 获得用户名和聊天对象
    const name = document.getElementById('name') as HTMLInputElement
    const username = document.getElementById('username') as HTMLInputElement
    // 设置用户名和聊天对象
    setName(name.value)
    setChatName(username.value)
    // 设置登录状态
    setIsLogin(true)
  }
  return (
    <div>
      <Tabs.Root className="TabsRoot" defaultValue="tab1">
        <Tabs.List className="TabsList" aria-label="Manage your account">
          <Tabs.Trigger className="TabsTrigger" value="tab1">
            Select your Name
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content className="TabsContent" value="tab1">
          <p className="Text">请填写你的用户名和你需要聊天的用户名</p>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="name">
              Name
            </label>
            <input className="Input" id="name" defaultValue="yueyun" />
          </fieldset>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="username">
              Chat Name
            </label>
            <input className="Input" id="username" defaultValue="DragoKing" />
          </fieldset>
          <div
            style={{
              display: 'flex',
              marginTop: 20,
              justifyContent: 'flex-end'
            }}
          >
            <button className="Button green" onClick={goChat}>
              Save Go Chat
            </button>
          </div>
        </Tabs.Content>
      </Tabs.Root>
    </div>
  )
}

export default Login
