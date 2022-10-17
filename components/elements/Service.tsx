import { FC } from 'react'
import { IServiceItem } from 'models/service'
import Image from 'next/image'
import styles from 'styles/sections/Services.module.scss'

type TProps = IServiceItem

const Service: FC<TProps> = ({ content, icon, iconAlt, iconHeight, iconWidth }) => {
  return (
    <div className={styles.service}>
      <Image priority src={icon.url} alt={iconAlt} width={iconWidth} height={iconHeight} />
      <p>{content}</p>
    </div>
  )
}

export default Service
