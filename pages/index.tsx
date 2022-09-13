import Decisions from 'sections/Decisions'
import Demo from 'sections/Demo'
import Features from 'sections/Features'
import Hero from 'sections/Hero'
import { ICard } from 'models/home'
import { IHeading } from 'models/common'
import type { NextPage } from 'next'
import { graphQLClient } from 'api/graphqlClient'
import { home } from 'api/queries/home'

interface IProps {
  features: ICard[]
  decisionCards: ICard[]
  headings: IHeading[]
}

const Home: NextPage<IProps> = ({ decisionCards, features, headings }) => {
  const heroHeading = headings.find(({ section }) => section === 'hero')
  const decisionsHeading = headings.find(({ section }) => section === 'decisions')

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

export const getStaticProps = async () => {
  const { decisionCards, features, headings } = await graphQLClient.request(home, { page: 'home' })
  return {
    props: {
      headings,
      decisionCards,
      features
    }
  }
}
