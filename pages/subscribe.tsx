import { FC } from 'react'
import { ISelect } from 'models/common'
import { Pages } from 'types/pages'
import { Selects } from 'types/selects'
import Subscribe from 'sections/Subscribe'
import { getSelectOptions } from 'utils/getSelectOptions'
import { graphQLClient } from 'api/graphqlClient'
import { subscribeQuery } from 'api/queries/subscribe'

interface IProps {
  typeSelectOptions: ISelect
  helpSelectOptions: ISelect
  toolSelectOptions: ISelect
}

const subscribe: FC<IProps> = (props) => {
  return (
    <main>
      <Subscribe {...props} />
    </main>
  )
}

export default subscribe

export const getStaticProps = async () => {
  const { selects } = await graphQLClient.request(subscribeQuery, { page: Pages.subscribe })
  const [typeSelectOptions] = getSelectOptions(selects)(Selects.type)
  const [helpSelectOptions] = getSelectOptions(selects)(Selects.help)
  const [toolSelectOptions] = getSelectOptions(selects)(Selects.tool)
  return {
    props: {
      typeSelectOptions,
      helpSelectOptions,
      toolSelectOptions
    }
  }
}
