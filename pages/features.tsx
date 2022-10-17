import { GetStaticProps, NextPage } from 'next'
import { IBenefitCard, IVisualisingCard } from 'models/features'

import Benefits from 'sections/Benefits'
import Demo from 'sections/Demo'
import { IHeading } from 'models/common'
import { Pages } from 'types/pages'
import { Sections } from 'types/sections'
import Visualising from 'sections/Visualising'
import { features } from 'api/queries/features'
import { getHeadings } from 'utils/getHeadings'
import { graphQLClient } from 'api/graphqlClient'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

interface IProps {
  visualisingHeading: IHeading
  benefitsHeading: IHeading
  visualisingCards: IVisualisingCard[]
  benefitCards: IBenefitCard[]
}

const Features: NextPage<IProps> = ({ visualisingHeading, benefitsHeading, visualisingCards, benefitCards }) => {
  return (
    <main>
      <Visualising heading={visualisingHeading} visualisingCards={visualisingCards} />
      <Benefits heading={benefitsHeading} benefitCards={benefitCards} />
      <Demo />
    </main>
  )
}

export default Features

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const { headings, visualisingCards, benefitCards } = await graphQLClient.request(features, { page: Pages.features })
  const [visualisingHeading, benefitsHeading] = getHeadings(headings)(Sections.visualising, Sections.benefits)
  return {
    props: {
      visualisingHeading,
      benefitsHeading,
      visualisingCards,
      benefitCards,
      ...(await serverSideTranslations(locale as string, ['common']))
    },
    revalidate: 10
  }
}
