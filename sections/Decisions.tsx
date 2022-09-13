import ButtonLink from 'components/ButtonLink'
import DecisionCard from 'components/elements/DecisionCard'
import { FC } from 'react'
import Heading from 'components/Heading'
import { ICard } from 'models/home'
import { IHeading } from 'models/common'
import { ROUTES } from 'utils/routes'
import classnames from 'classnames'
import styles from 'styles/sections/Decisions.module.scss'
import stylesShared from 'styles/Shared.module.scss'

interface IProps {
  heading?: IHeading
  decisionCards: ICard[]
}

const Decisions: FC<IProps> = ({ heading, decisionCards }) => {
  return (
    <section className={classnames(stylesShared.container, stylesShared.section_spacing)}>
      <Heading justify="center" p={heading?.content} h2={heading?.title} />
      <div className={styles.cards}>
        {decisionCards.map((decisionCard) => (
          <DecisionCard key={decisionCard.id} {...decisionCard} />
        ))}
      </div>
      <div className={styles.bottom_wrapper}>
        <h2 className={styles.title_bottom}>Start making Data-Driven Decisions with Lexer!</h2>
        <ButtonLink href={ROUTES.subscribe} modifiers={['large', 'filled']}>
          Get Started for Free
        </ButtonLink>
      </div>
    </section>
  )
}

export default Decisions
