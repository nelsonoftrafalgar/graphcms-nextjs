import { FC } from 'react'
import Heading from 'components/Heading'
import { IHeading } from 'models/common'
import { IVisualisingCard } from 'models/features'
import VisualisingCard from 'components/elements/VisualisingCard'
import styles from 'styles/sections/Visualising.module.scss'
import stylesShared from 'styles/Shared.module.scss'

interface IProps {
  heading?: IHeading
  visualisingCards: IVisualisingCard[]
}

const Visualising: FC<IProps> = ({ heading, visualisingCards }) => {
  return (
    <section className={stylesShared.section_spacing}>
      <div className={styles.spacing}>
        <Heading justify="center" h1={heading?.title} />
      </div>

      {visualisingCards.map((visualisingCard) => (
        <VisualisingCard key={visualisingCard.id} {...visualisingCard} />
      ))}
    </section>
  )
}

export default Visualising
