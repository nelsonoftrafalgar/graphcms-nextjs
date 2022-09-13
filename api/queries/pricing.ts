import { gql } from 'graphql-request'

export const pricing = gql`
  query ($page: String!) {
    headings(where: { page: $page }) {
      title
      content
      section
    }
    plans {
      type
      span
      price
      id
      buttonText
      content
      planIncludes {
        include
        id
      }
    }
    defaultIncludes {
      content
      iconAlt
      iconHeight
      iconWidth
      id
      icon {
        url
      }
    }
    faqs {
      id
      question
      answer
    }
  }
`
