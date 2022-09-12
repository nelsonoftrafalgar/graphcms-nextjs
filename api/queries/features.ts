import { gql } from 'graphql-request'

export const features = gql`
  {
    visualisings {
      title
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
    benefits {
      title
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
