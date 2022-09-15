import { GetStaticProps, NextPage } from 'next'

import Contact from 'sections/Contact'
import Demo from 'sections/Demo'
import { ISelect } from 'models/common'
import { Pages } from 'types/pages'
import { Selects } from 'types/selects'
import { contact } from 'api/queries/contact'
import { getSelectOptions } from 'utils/getSelectOptions'
import { graphQLClient } from 'api/graphqlClient'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

interface IProps {
  topicSelect: ISelect
}

const ContactUs: NextPage<IProps> = (props) => {
  return (
    <main>
      <Contact {...props} />
      <Demo />
    </main>
  )
}

export default ContactUs

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const { selects } = await graphQLClient.request(contact, { page: Pages.contact_us })
  const [topicSelect] = getSelectOptions(selects)(Selects.topic)
  return {
    props: {
      topicSelect,
      ...(await serverSideTranslations(locale as string, ['common', 'contact_us']))
    }
  }
}
