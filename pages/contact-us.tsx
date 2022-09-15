import Contact from 'sections/Contact'
import Demo from 'sections/Demo'
import { FC } from 'react'
import { ISelect } from 'models/common'
import { Pages } from 'types/pages'
import { Selects } from 'types/selects'
import { contact } from 'api/queries/contact'
import { getSelectOptions } from 'utils/getSelectOptions'
import { graphQLClient } from 'api/graphqlClient'

interface IProps {
  topicSelect: ISelect
}

const ContactUs: FC<IProps> = (props) => {
  return (
    <main>
      <Contact {...props} />
      <Demo />
    </main>
  )
}

export default ContactUs

export const getStaticProps = async () => {
  const { selects } = await graphQLClient.request(contact, { page: Pages.contact_us })
  const [topicSelect] = getSelectOptions(selects)(Selects.topic)
  return {
    props: {
      topicSelect
    }
  }
}
