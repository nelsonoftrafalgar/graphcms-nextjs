import { IBenefitCard, IVisualisingCard } from 'models/features'

import Benefits from 'sections/Benefits'
import Demo from 'sections/Demo'
import { FC } from 'react'
import { IHeading } from 'models/common'
import Visualising from 'sections/Visualising'
import { features } from 'api/queries/features'
import { graphQLClient } from 'api/graphqlClient'

interface IProps {
  headings: IHeading[]
  visualisingCards: IVisualisingCard[]
  benefitCards: IBenefitCard[]
}

const Features: FC<IProps> = ({ headings, visualisingCards, benefitCards }) => {
  const visualisingHeading = headings.find(({ section }) => section === 'visualising')
  const benefitsHeading = headings.find(({ section }) => section === 'benefits')

  return (
    <main>
      <Visualising heading={visualisingHeading} visualisingCards={visualisingCards} />
      <Benefits heading={benefitsHeading} benefitCards={benefitCards} />
      <Demo />
    </main>
  )
}

export default Features

export const getStaticProps = async () => {
  const { headings, visualisingCards, benefitCards } = await graphQLClient.request(features, { page: 'features' })
  return {
    props: {
      headings,
      visualisingCards,
      benefitCards
    }
  }
}
