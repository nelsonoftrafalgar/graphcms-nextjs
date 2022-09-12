import { gql } from 'graphql-request'

export const service = gql`
  {
    pickerItems {
      id
      title
      content
      buttonText
      pickerItemIcons {
        id
        name
        icon {
          url
        }
        iconAlt
        iconHeight
        iconWidth
      }
    }
    services {
      id
      content
      icon {
        url
      }
      iconAlt
      iconHeight
      iconWidth
    }
  }
`
