import type { GetStaticProps, NextPage } from 'next'

import Decisions from 'sections/Decisions'
import Demo from 'sections/Demo'
import Features from 'sections/Features'
import Hero from 'sections/Hero'
import { ICard } from 'models/home'
import { IHeading } from 'models/common'
import { Pages } from 'types/pages'
import { Sections } from 'types/sections'
import { getHeadings } from 'utils/getHeadings'
import { graphQLClient } from 'api/graphqlClient'
import { home } from 'api/queries/home'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

interface IProps {
  features: ICard[]
  decisionCards: ICard[]
  heroHeading: IHeading
  decisionsHeading: IHeading
}

const Home: NextPage<IProps> = ({ decisionCards, features, heroHeading, decisionsHeading }) => {
  return (
    <main>
      <Hero heading={heroHeading} />
      <Decisions heading={decisionsHeading} decisionCards={decisionCards} />
      <Features features={features} />
      <Demo />
    </main>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const { decisionCards, features, headings } = await graphQLClient.request(home, { page: Pages.home })
  const [heroHeading, decisionsHeading] = getHeadings(headings)(Sections.hero, Sections.decisions)
  return {
    props: {
      heroHeading,
      decisionsHeading,
      decisionCards,
      features,
      ...(await serverSideTranslations(locale as string, ['common', 'home']))
    },
    revalidate: 10
  }
}
