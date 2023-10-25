import React,{useState} from "react";
import { Input,Button } from 'antd'
import {ArrowLeftOutlined,ArrowRightOutlined} from '@ant-design/icons'
import classes from './index.module.css'
import axios from "axios";
const { TextArea } = Input
const titleStyle = {
  fontSize:'26px',
  fontWeight:'bold',
  marginBottom:'15px'
}
const buttonStyle = {
  fontSize:'20px',
  width:'40%',
  display:'flex',
  justifyContent:'center',
  alignItems:'center'
}
const RsaShow = () => {
  const [plainValue,setPlainValue] = useState('')
  const [explainValue, setExplainValue] = useState('')
  const decrypt = async() => { 
    console.log('解密')
    // 从本地存储取出私钥
    let privateKey = JSON.parse(localStorage.getItem('privateKey'))
    try {
      const res = await axios.post('http://127.0.0.1:3000/decrypt', {
        encryptMessage: explainValue,
        privateKey: privateKey
      })
      setPlainValue(res.data.data)
    } catch (e) {
      console.log(e)
    }
  }
  const encrypt = async () => {
    console.log('加密')
    // 从本地存储取出公钥
    let publicKey = JSON.parse(localStorage.getItem('publicKey'))
    console.log(plainValue,publicKey)
    try {
      const res = await axios.post('http://127.0.0.1:3000/encrypt', {
        message: plainValue,
        publicKey: publicKey
      })
      setExplainValue(res.data.data)
    } catch (e) {
      console.log('12')
      console.log(e)
    }
  }
  return <div className={classes.container}>
    {/* 原文 */}
    <div className={classes.content}>
      <div style={titleStyle}>原文</div>
      <TextArea value={plainValue} style={{
        height: '200px',
        width:'100%',
        
      }} onChange={(e)=>setPlainValue(e.target.value)} ></TextArea>
    </div>
    <div className={classes.operateBtn}>
    <Button type="primary" style={buttonStyle} size='large' onClick={encrypt}> <span>加密</span> <ArrowRightOutlined></ArrowRightOutlined></Button>
    <Button type="primary" style={buttonStyle} size='large' onClick={decrypt}><ArrowLeftOutlined></ArrowLeftOutlined><span>解密</span></Button>
    </div>
    {/* 密文 */}
    <div className={classes.content}>
      <div style={titleStyle}>密文</div>
      <TextArea style={{
        height: '200px',
        width:'100%'
      }} value={explainValue} onChange={(e)=>setExplainValue (e.target.value)}></TextArea>
    </div>
  </div>
}

export default RsaShow