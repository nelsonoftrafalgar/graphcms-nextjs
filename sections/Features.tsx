import { FC } from 'react'
import { ICard } from 'models/home'
import Image from 'next/image'
import classnames from 'classnames'
import styles from 'styles/sections/Features.module.scss'
import stylesShared from 'styles/Shared.module.scss'

interface IProps {
  features: ICard[]
}

const Features: FC<IProps> = ({ features }) => {
  return (
    <section className={classnames(styles.grid, stylesShared.container, stylesShared.section_spacing)}>
      {features.map(({ id, icon, iconAlt, iconHeight, iconWidth, title, content }) => (
        <div key={id} className={styles.feature}>
          <div className={styles.icon}>
            <Image src={icon.url} alt={iconAlt} width={iconWidth} height={iconHeight} />
          </div>
          <div>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.content}>{content}</p>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Features
