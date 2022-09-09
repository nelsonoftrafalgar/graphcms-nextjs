import { IBenefitCard, ITitle, IVisualisingCard } from 'models/features'

import Benefits from 'sections/Benefits'
import Demo from 'sections/Demo'
import { FC } from 'react'
import Visualising from 'sections/Visualising'
import { features } from 'api/queries/features'
import { graphQLClient } from 'api/graphqlClient'

interface IProps {
  visualisings: ITitle
  benefits: ITitle
  visualisingCards: IVisualisingCard[]
  benefitCards: IBenefitCard[]
}

const Features: FC<IProps> = ({ visualisingCards, visualisings, benefitCards, benefits }) => {
  return (
    <main>
      <Visualising {...visualisings} visualisingCards={visualisingCards} />
      <Benefits {...benefits} benefitCards={benefitCards} />
      <Demo />
    </main>
  )
}

export default Features

export const getStaticProps = async () => {
  const { visualisings, visualisingCards, benefits, benefitCards } = await graphQLClient.request(features)
  return {
    props: {
      visualisings: visualisings[0],
      benefits: benefits[0],
      visualisingCards,
      benefitCards
    }
  }
}
