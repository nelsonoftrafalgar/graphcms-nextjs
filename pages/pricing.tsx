import { IDefaultInclude, IFAQ, IPlan } from 'models/pricing'

import Demo from 'sections/Demo'
import FAQ from 'sections/FAQ'
import { FC } from 'react'
import { IHeading } from 'models/common'
import { Pages } from 'types/pages'
import Plan from 'sections/Plan'
import { Sections } from 'types/sections'
import { getHeadings } from 'utils/getHeadings'
import { graphQLClient } from 'api/graphqlClient'
import { pricing } from 'api/queries/pricing'

interface IProps {
  planHeading: IHeading
  faqHeading: IHeading
  plans: IPlan[]
  defaultIncludes: IDefaultInclude[]
  faqs: IFAQ[]
}

const Pricing: FC<IProps> = ({ planHeading, faqHeading, plans, defaultIncludes, faqs }) => {
  return (
    <main>
      <Plan heading={planHeading} plans={plans} defaultIncludes={defaultIncludes} />
      <FAQ heading={faqHeading} faqs={faqs} />
      <Demo />
    </main>
  )
}

export default Pricing

export const getStaticProps = async () => {
  const { headings, plans, defaultIncludes, faqs } = await graphQLClient.request(pricing, { page: Pages.pricing })
  const [planHeading, faqHeading] = getHeadings(headings)(Sections.plan, Sections.faq)
  return {
    props: {
      planHeading,
      faqHeading,
      plans,
      defaultIncludes,
      faqs
    }
  }
}
