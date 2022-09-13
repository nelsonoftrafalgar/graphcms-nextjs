import { gql } from 'graphql-request'

export const service = gql`
  query ($page: String!) {
    headings(where: { page: $page }) {
      title
      content
      section
    }
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
