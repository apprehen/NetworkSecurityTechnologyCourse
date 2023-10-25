/* eslint-disable prettier/prettier */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '@/assets/css/reset.css'
import '@radix-ui/themes/styles.css'
import { Theme } from '@radix-ui/themes'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <Theme
    accentColor="crimson"
    grayColor="sand"
    radius="large"
    scaling="95%"
    style={{
      display: 'flex',
      alignItems: 'center',
      height: '100vh',
      justifyContent: 'center'
    }}
  >
    <App />
  </Theme>
)
