import { gql } from 'graphql-request'

export const home = gql`
  {
    heros {
      title
      content
      buttonText
      imageAlt
      image {
        url
      }
    }
    decisions {
      paragraph
      heading
      bottomTitle
      buttonText
    }
    decisionCards {
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
