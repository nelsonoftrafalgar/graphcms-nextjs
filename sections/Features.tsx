import { FC } from 'react'
import Feature from 'components/elements/Feature'
import { ICard } from 'models/home'
import classnames from 'classnames'
import styles from 'styles/sections/Features.module.scss'
import stylesShared from 'styles/Shared.module.scss'

interface IProps {
  features: ICard[]
}

const Features: FC<IProps> = ({ features }) => {
  return (
    <section className={classnames(styles.grid, stylesShared.container, stylesShared.section_spacing)}>
      {features.map((feature) => (
        <Feature key={feature.id} {...feature} />
      ))}
    </section>
  )
}

export default Features
