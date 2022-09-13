import Demo from 'sections/Demo'
import { FC } from 'react'
import { IHeading } from 'models/pricing'
import { ITimelineItem } from 'models/aboutUs'
import Organizations from 'sections/Organizations'
import TimeLine from 'sections/TimeLine'
import { aboutUs } from 'api/queries/about-us'
import { graphQLClient } from 'api/graphqlClient'

interface IProps {
  headings: IHeading[]
  timelineItems: ITimelineItem[]
}

const AboutUs: FC<IProps> = ({ headings, timelineItems }) => {
  const organizationsHeading = headings.filter(({ section }) => section === 'organizations') || []
  const timelineHeading = headings.find(({ section }) => section === 'organizations')

  return (
    <main>
      <Organizations headings={organizationsHeading} />
      <TimeLine heading={timelineHeading} timelineItems={timelineItems} />
      <Demo />
    </main>
  )
}

export default AboutUs

export const getStaticProps = async () => {
  const { headings, timelineItems } = await graphQLClient.request(aboutUs, { page: 'about-us' })
  return {
    props: {
      headings,
      timelineItems
    }
  }
}
