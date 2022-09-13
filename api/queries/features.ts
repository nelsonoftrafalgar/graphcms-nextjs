import { gql } from 'graphql-request'

export const features = gql`
  query ($page: String!) {
    headings(where: { page: $page }) {
      title
      content
      section
    }
    visualisingCards {
      id
      title
      content
      buttonText
      image {
        url
      }
      imageAlt
    }
    benefitCards {
      id
      title
      imageAlt
      imageHeight
      imageWidth
      image {
        url
      }
    }
  }
`
