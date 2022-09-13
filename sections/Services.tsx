import { FC } from 'react'
import { IHeading } from 'models/common'
import { IServiceItem } from 'models/service'
import Service from 'components/elements/Service'
import classnames from 'classnames'
import styles from 'styles/sections/Services.module.scss'
import stylesShared from 'styles/Shared.module.scss'

interface IProps {
  heading?: IHeading
  services: IServiceItem[]
}

const Services: FC<IProps> = ({ heading, services }) => {
  return (
    <section className={classnames(stylesShared.container, stylesShared.section_spacing)}>
      <h2 className={styles.heading}>{heading?.title}</h2>
      <div className={styles.services}>
        {services.map((service) => (
          <Service key={service.id} {...service} />
        ))}
      </div>
    </section>
  )
}

export default Services
