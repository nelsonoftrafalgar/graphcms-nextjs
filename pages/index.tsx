import { ICard, IDecisions, IHero } from 'models/home'

import Decisions from 'sections/Decisions'
import Demo from 'sections/Demo'
import Features from 'sections/Features'
import Hero from 'sections/Hero'
import type { NextPage } from 'next'
import { graphQLClient } from 'api/graphqlClient'
import { home } from 'api/queries/home'

interface IProps {
  hero: IHero
  decisions: IDecisions
  features: ICard[]
  decisionCards: ICard[]
}

const Home: NextPage<IProps> = ({ hero, decisions, decisionCards, features }) => {
  return (
    <main>
      <Hero {...hero} />
      <Decisions {...decisions} decisionCards={decisionCards} />
      <Features features={features} />
      <Demo />
    </main>
  )
}

export default Home

export const getStaticProps = async () => {
  const { heros, decisions, decisionCards, features } = await graphQLClient.request(home)
  return {
    props: {
      hero: heros[0],
      decisions: decisions[0],
      decisionCards,
      features
    }
  }
}
