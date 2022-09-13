import ButtonLink from 'components/ButtonLink'
import { FC } from 'react'
import Heading from 'components/Heading'
import { ICard } from 'models/home'
import { IHeading } from 'models/common'
import Image from 'next/image'
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
        {decisionCards.map(({ id, icon, iconAlt, iconHeight, iconWidth, title, content }, i) => (
          <div key={id} className={classnames(styles.card, { [styles.dark]: i % 2 !== 0 })}>
            <div className={classnames(styles.icon, { [styles.dark]: i % 2 !== 0 })}>
              <Image src={icon.url} alt={iconAlt} width={iconWidth} height={iconHeight} />
            </div>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.content}>{content}</p>
          </div>
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
