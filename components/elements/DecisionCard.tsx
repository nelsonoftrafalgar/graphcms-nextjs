import { FC } from 'react'
import { ICard } from 'models/home'
import Image from 'next/image'
import classnames from 'classnames'
import styles from 'styles/sections/Decisions.module.scss'

type TProps = ICard

const DecisionCard: FC<TProps> = ({ icon, iconAlt, iconHeight, iconWidth, title, content, theme }) => {
  return (
    <div className={classnames(styles.card, { [styles.dark]: theme === 'dark' })}>
      <div className={classnames(styles.icon, { [styles.dark]: theme === 'dark' })}>
        <Image src={icon.url} alt={iconAlt} width={iconWidth} height={iconHeight} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.content}>{content}</p>
    </div>
  )
}

export default DecisionCard
