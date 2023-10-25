import React from 'react'
import { Avatar } from '@radix-ui/themes'
import style from './index.module.css'
interface IProps {
  changeShow: (id: string) => void
  id: string
  actived: boolean
}
const AvaterShow: React.FC<IProps> = (props: IProps) => {
  const clickAvaterShow = () => {
    props.changeShow(props.id)
  }
  return (
    <div
      className={
        props.actived
          ? `${style.avater_show} ${style.actived}`
          : `${style.avater_show}`
      }
      onClick={clickAvaterShow}
    >
      <Avatar size="4" radius="full" fallback={'月晕'} />
      <div className={style.avater_title}>月晕</div>
    </div>
  )
}

export default AvaterShow
