import Decisions from 'sections/Decisions'
import Demo from 'sections/Demo'
import Features from 'sections/Features'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <main>
      <Decisions />
      <Features />
      <Demo />
    </main>
  )
}

export default Home
