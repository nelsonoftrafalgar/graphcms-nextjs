import { IPickerItem, IServiceItem } from 'models/service'

import Demo from 'sections/Demo'
import { FC } from 'react'
import { IHeading } from 'models/common'
import Picker from 'sections/Picker'
import Services from 'sections/Services'
import { graphQLClient } from 'api/graphqlClient'
import { service } from 'api/queries/service'

interface IProps {
  headings: IHeading[]
  pickerItems: IPickerItem[]
  services: IServiceItem[]
}

const Service: FC<IProps> = ({ headings, pickerItems, services }) => {
  const pickerHeading = headings.find(({ section }) => section === 'picker')
  const servicesHeading = headings.find(({ section }) => section === 'services')

  return (
    <main>
      <Picker heading={pickerHeading} pickerItems={pickerItems} />
      <Services heading={servicesHeading} services={services} />
      <Demo />
    </main>
  )
}

export default Service

export const getStaticProps = async () => {
  const { headings, pickerItems, services } = await graphQLClient.request(service, { page: 'service' })
  return {
    props: {
      headings,
      pickerItems,
      services
    }
  }
}
