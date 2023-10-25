import Login from '@/views/Login'
import useUserInfo from '@/store/userInfo'
import Chat from '@/views/Chat'
import './App.css'
function App() {
  const { isLogin } = useUserInfo()
  return <div className="App">{isLogin ? <Chat></Chat> : <Login />}</div>
}
export default App
