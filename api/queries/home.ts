import { gql } from 'graphql-request'

export const home = gql`
  query ($page: String!) {
    headings(where: { page: $page }) {
      title
      content
      section
    }
    decisionCards {
      id
      title
      theme
      content
      icon {
        url
      }
      iconAlt
      iconWidth
      iconHeight
    }
    features {
      id
      title
      content
      icon {
        url
      }
      iconAlt
      iconWidth
      iconHeight
    }
  }
`
