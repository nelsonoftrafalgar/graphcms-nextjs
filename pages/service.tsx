import { IPickerItem, IServiceItem } from 'models/service'

import Demo from 'sections/Demo'
import { FC } from 'react'
import Picker from 'sections/Picker'
import Services from 'sections/Services'
import { graphQLClient } from 'api/graphqlClient'
import { service } from 'api/queries/service'

interface IProps {
  pickerItems: IPickerItem[]
  services: IServiceItem[]
}

const Service: FC<IProps> = ({ pickerItems, services }) => {
  return (
    <main>
      <Picker pickerItems={pickerItems} />
      <Services services={services} />
      <Demo />
    </main>
  )
}

export default Service

export const getStaticProps = async () => {
  const { pickerItems, services } = await graphQLClient.request(service)
  return {
    props: {
      pickerItems,
      services
    }
  }
}
