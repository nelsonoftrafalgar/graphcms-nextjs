import { IDefaultInclude, IPlan } from 'models/pricing'

import DefaultInclude from 'components/elements/DefaultInclude'
import { FC } from 'react'
import Heading from 'components/Heading'
import { IHeading } from 'models/common'
import PlanCard from 'components/elements/PlanCard'
import classnames from 'classnames'
import styles from 'styles/sections/Plan.module.scss'
import stylesShared from 'styles/Shared.module.scss'

interface IProps {
  heading?: IHeading
  plans: IPlan[]
  defaultIncludes: IDefaultInclude[]
}

const Plan: FC<IProps> = ({ heading, plans, defaultIncludes }) => {
  return (
    <section className={classnames(stylesShared.container, stylesShared.section_spacing)}>
      <Heading justify="center" p={heading?.content} h1={heading?.title} />
      <div className={styles.wrapper}>
        {plans.map((plan) => (
          <PlanCard key={plan.id} {...plan} />
        ))}
      </div>
      <h3 className={styles.sub_heading}>All plans include:</h3>
      <div className={styles.icons}>
        {defaultIncludes.map((defaultInclude) => (
          <DefaultInclude key={defaultInclude.id} {...defaultInclude} />
        ))}
      </div>
    </section>
  )
}

export default Plan
