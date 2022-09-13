import { IDefaultInclude, IHeading, IPlan } from 'models/pricing'

import ButtonLink from 'components/ButtonLink'
import { FC } from 'react'
import Heading from 'components/Heading'
import Image from 'next/image'
import { ROUTES } from 'utils/routes'
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
        {plans.map(({ id, type, price, span, content, planIncludes, buttonText }) => (
          <div key={id} className={classnames(styles.plan, { [styles.filled]: !price })}>
            <p className={styles.type}>{type}</p>
            {price ? (
              <p className={styles.price}>
                <span>USD {price}</span>
                {span}*
              </p>
            ) : (
              <p className={styles.price}>
                <span>Contact Us</span>
              </p>
            )}
            <p className={styles.includes}>{content}</p>
            <ul className={styles.list}>
              {planIncludes.map(({ id, include }) => (
                <li key={id} className={styles.item}>
                  {include}
                </li>
              ))}
            </ul>
            <ButtonLink href={ROUTES.subscribe} modifiers={price ? ['large', 'filled'] : ['large', 'transparent']}>
              {buttonText}
            </ButtonLink>
          </div>
        ))}
      </div>
      <h3 className={styles.sub_heading}>All plans include:</h3>
      <div className={styles.icons}>
        {defaultIncludes.map(({ id, content, icon, iconAlt, iconHeight, iconWidth }) => (
          <div key={id} className={styles.icon}>
            <Image src={icon.url} alt={iconAlt} width={iconWidth} height={iconHeight} />
            <span>{content}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Plan
