import { IBenefitCard, ITitle } from 'models/features'

import { FC } from 'react'
import Heading from 'components/Heading'
import Image from 'next/image'
import classnames from 'classnames'
import styles from 'styles/sections/Benefits.module.scss'
import stylesShared from 'styles/Shared.module.scss'

interface IProps extends ITitle {
  benefitCards: IBenefitCard[]
}

const Benefits: FC<IProps> = ({ title, benefitCards }) => {
  return (
    <section className={classnames(stylesShared.container, stylesShared.section_spacing)}>
      <Heading justify="left" h2={title} />
      <div className={styles.benefits}>
        {benefitCards.map(({ id, title, image, imageAlt, imageHeight, imageWidth }) => (
          <div key={id} className={styles.benefit}>
            <Image src={image.url} alt={imageAlt} width={imageWidth} height={imageHeight} />
            <h3 className={styles.name}>{title}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Benefits
