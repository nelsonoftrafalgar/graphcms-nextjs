import { FC } from 'react'
import { IServiceItem } from 'models/service'
import Image from 'next/image'
import classnames from 'classnames'
import styles from 'styles/sections/Services.module.scss'
import stylesShared from 'styles/Shared.module.scss'

interface IProps {
  services: IServiceItem[]
}

const Services: FC<IProps> = ({ services }) => {
  return (
    <section className={classnames(stylesShared.container, stylesShared.section_spacing)}>
      <h2 className={styles.heading}>Datalexing Services Empower You To:</h2>
      <div className={styles.services}>
        {services.map(({ id, content, icon, iconAlt, iconHeight, iconWidth }) => (
          <div key={id} className={styles.service}>
            <Image src={icon.url} alt={iconAlt} width={iconWidth} height={iconHeight} />
            <p>{content}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
