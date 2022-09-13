import BenefitCard from 'components/elements/BenefitCard'
import { FC } from 'react'
import Heading from 'components/Heading'
import { IBenefitCard } from 'models/features'
import { IHeading } from 'models/common'
import classnames from 'classnames'
import styles from 'styles/sections/Benefits.module.scss'
import stylesShared from 'styles/Shared.module.scss'

interface IProps {
  heading?: IHeading
  benefitCards: IBenefitCard[]
}

const Benefits: FC<IProps> = ({ heading, benefitCards }) => {
  return (
    <section className={classnames(stylesShared.container, stylesShared.section_spacing)}>
      <Heading justify="left" h2={heading?.title} />
      <div className={styles.benefits}>
        {benefitCards.map((benefitCard) => (
          <BenefitCard key={benefitCard.id} {...benefitCard} />
        ))}
      </div>
    </section>
  )
}

export default Benefits
