import { GetStaticProps, NextPage } from 'next'

import { ISelect } from 'models/common'
import { Pages } from 'types/pages'
import { Selects } from 'types/selects'
import Subscribe from 'sections/Subscribe'
import { getSelectOptions } from 'utils/getSelectOptions'
import { graphQLClient } from 'api/graphqlClient'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { subscribeQuery } from 'api/queries/subscribe'

interface IProps {
  typeSelect: ISelect
  helpSelect: ISelect
  toolSelect: ISelect
}

const subscribe: NextPage<IProps> = (props) => {
  return (
    <main>
      <Subscribe {...props} />
    </main>
  )
}

export default subscribe

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const { selects } = await graphQLClient.request(subscribeQuery, { page: Pages.subscribe })
  const [typeSelect] = getSelectOptions(selects)(Selects.type)
  const [helpSelect] = getSelectOptions(selects)(Selects.help)
  const [toolSelect] = getSelectOptions(selects)(Selects.tool)
  return {
    props: {
      typeSelect,
      helpSelect,
      toolSelect,
      ...(await serverSideTranslations(locale as string, ['common', 'subscribe']))
    }
  }
}
