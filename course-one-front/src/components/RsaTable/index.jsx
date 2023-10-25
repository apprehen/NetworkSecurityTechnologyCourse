import React,{useState} from "react";
import classes from './index.module.css'
import { Input, Button, Select } from "antd";
import axios from "axios";
const { TextArea } = Input
const RsaTable = () => {
  const [privateKey,setPrivateKey] = useState('')
  const [publicKey,setPublicKey] = useState('')
  const generateKey = async () => { 
    try {
      const res = await axios.get('http://127.0.0.1:3000/generateKey')
      setPrivateKey(res.data.data.privateKey.d)
      setPublicKey(res.data.data.publicKey.e)
      // 存储到本地 存储的是字符串
      localStorage.setItem('privateKey', JSON.stringify(res.data.data.privateKey))
      localStorage.setItem('publicKey', JSON.stringify(res.data.data.publicKey))

    } catch (e) {
      console.log(e)
    }
  }
  return <div className={classes.container}>
    <div className={classes.content}>
      <div>Private Key</div>
      <TextArea value={privateKey} style={{
        height: '200px',
        width:'100%',
        
      }} onChange={(e)=>setPrivateKey(e.target.value)} ></TextArea>
    </div>
    <div className={classes.operateBtn}>
      <Button type="primary" onClick={generateKey}>生成密钥</Button>
    </div>
    <div className={classes.content}>
      <div>Public Key</div>
      <TextArea value={publicKey} style={{
        height: '200px',
        width:'100%',
        
      }} onChange={(e)=>setPrivateKey(e.target.value)} ></TextArea>
    </div>
  </div>
}

export default RsaTable