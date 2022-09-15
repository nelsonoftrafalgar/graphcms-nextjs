import { GetStaticProps, NextPage } from 'next'

import Demo from 'sections/Demo'
import { IHeading } from 'models/common'
import { ITimelineItem } from 'models/aboutUs'
import Organizations from 'sections/Organizations'
import { Pages } from 'types/pages'
import { Sections } from 'types/sections'
import TimeLine from 'sections/TimeLine'
import { aboutUs } from 'api/queries/about-us'
import { getHeadings } from 'utils/getHeadings'
import { graphQLClient } from 'api/graphqlClient'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

interface IProps {
  organizationsHeadings: IHeading[]
  timelineHeading: IHeading
  timelineItems: ITimelineItem[]
}

const AboutUs: NextPage<IProps> = ({ organizationsHeadings, timelineHeading, timelineItems }) => {
  return (
    <main>
      <Organizations headings={organizationsHeadings} />
      <TimeLine heading={timelineHeading} timelineItems={timelineItems} />
      <Demo />
    </main>
  )
}

export default AboutUs

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const { headings, timelineItems } = await graphQLClient.request(aboutUs, { page: Pages.about_us })
  const [timelineHeading, organizationsHeadings] = getHeadings(headings)(Sections.timeline, Sections.organizations)
  return {
    props: {
      organizationsHeadings,
      timelineHeading,
      timelineItems,
      ...(await serverSideTranslations(locale as string, ['common', 'about_us']))
    }
  }
}
