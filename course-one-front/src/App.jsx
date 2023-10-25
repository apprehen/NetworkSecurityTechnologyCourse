import { useState } from 'react'
import RsaShow from './components/RsaShow/index'
import RsaTable from './components/RsaTable'
function App() {
  return (
    <div style={{
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
      // height: '100vh'
    }}>
      <RsaShow></RsaShow>
      <RsaTable></RsaTable>
    </div>
  )
}

export default App
