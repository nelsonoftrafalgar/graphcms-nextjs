import { IDefaultInclude, IFAQ, IHeading, IPlan } from 'models/pricing'

import Demo from 'sections/Demo'
import FAQ from 'sections/FAQ'
import { FC } from 'react'
import Plan from 'sections/Plan'
import { graphQLClient } from 'api/graphqlClient'
import { pricing } from 'api/queries/pricing'

interface IProps {
  headings: IHeading[]
  plans: IPlan[]
  defaultIncludes: IDefaultInclude[]
  faqs: IFAQ[]
}

const Pricing: FC<IProps> = ({ headings, plans, defaultIncludes, faqs }) => {
  const planHeading = headings.find(({ section }) => section === 'plan')
  const faqHeading = headings.find(({ section }) => section === 'faq')

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
  const { headings, plans, defaultIncludes, faqs } = await graphQLClient.request(pricing, { page: 'pricing' })
  return {
    props: {
      headings,
      plans,
      defaultIncludes,
      faqs
    }
  }
}
