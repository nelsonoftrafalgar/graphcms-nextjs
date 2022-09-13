import ButtonLink from 'components/ButtonLink'
import { FC } from 'react'
import { IPlan } from 'models/pricing'
import { ROUTES } from 'utils/routes'
import classnames from 'classnames'
import styles from 'styles/sections/Plan.module.scss'

type TProps = IPlan

const PlanCard: FC<TProps> = ({ type, price, span, content, planIncludes, buttonText }) => {
  return (
    <div className={classnames(styles.plan, { [styles.filled]: !price })}>
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
  )
}

export default PlanCard
