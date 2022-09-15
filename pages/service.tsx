import { GetStaticProps, NextPage } from 'next'
import { IPickerItem, IServiceItem } from 'models/service'

import Demo from 'sections/Demo'
import { IHeading } from 'models/common'
import { Pages } from 'types/pages'
import Picker from 'sections/Picker'
import { Sections } from 'types/sections'
import Services from 'sections/Services'
import { getHeadings } from 'utils/getHeadings'
import { graphQLClient } from 'api/graphqlClient'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { service } from 'api/queries/service'

interface IProps {
  pickerHeading: IHeading
  servicesHeading: IHeading
  pickerItems: IPickerItem[]
  services: IServiceItem[]
}

const Service: NextPage<IProps> = ({ pickerHeading, servicesHeading, pickerItems, services }) => {
  return (
    <main>
      <Picker heading={pickerHeading} pickerItems={pickerItems} />
      <Services heading={servicesHeading} services={services} />
      <Demo />
    </main>
  )
}

export default Service

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const { headings, pickerItems, services } = await graphQLClient.request(service, { page: Pages.service })
  const [pickerHeading, servicesHeading] = getHeadings(headings)(Sections.picker, Sections.services)
  return {
    props: {
      pickerHeading,
      servicesHeading,
      pickerItems,
      services,
      ...(await serverSideTranslations(locale as string, ['common', 'service']))
    }
  }
}
