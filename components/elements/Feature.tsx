import { FC } from 'react'
import { ICard } from 'models/home'
import Image from 'next/image'
import styles from 'styles/sections/Features.module.scss'

type TProps = ICard

const Feature: FC<TProps> = ({ icon, iconAlt, iconHeight, iconWidth, title, content }) => {
  return (
    <div className={styles.feature}>
      <div className={styles.icon}>
        <Image src={icon.url} alt={iconAlt} width={iconWidth} height={iconHeight} />
      </div>
      <div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.content}>{content}</p>
      </div>
    </div>
  )
}

export default Feature
