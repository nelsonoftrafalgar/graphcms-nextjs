import { IBenefitCard, IVisualisingCard } from 'models/features'

import Benefits from 'sections/Benefits'
import Demo from 'sections/Demo'
import { FC } from 'react'
import { IHeading } from 'models/common'
import { Pages } from 'types/pages'
import { Sections } from 'types/sections'
import Visualising from 'sections/Visualising'
import { features } from 'api/queries/features'
import { getHeadings } from 'utils/getHeadings'
import { graphQLClient } from 'api/graphqlClient'

interface IProps {
  visualisingHeading: IHeading
  benefitsHeading: IHeading
  visualisingCards: IVisualisingCard[]
  benefitCards: IBenefitCard[]
}

const Features: FC<IProps> = ({ visualisingHeading, benefitsHeading, visualisingCards, benefitCards }) => {
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
  const { headings, visualisingCards, benefitCards } = await graphQLClient.request(features, { page: Pages.features })
  const [visualisingHeading, benefitsHeading] = getHeadings(headings)(Sections.visualising, Sections.benefits)
  return {
    props: {
      visualisingHeading,
      benefitsHeading,
      visualisingCards,
      benefitCards
    }
  }
}
