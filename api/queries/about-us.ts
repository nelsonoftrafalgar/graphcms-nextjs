import { gql } from 'graphql-request'

export const aboutUs = gql`
  query ($page: String!) {
    headings(where: { page: $page }) {
      title
      content
      section
    }
    timelineItems {
      id
      timelineLayout
      year
      title
      content
      imageAlt
      image {
        url
      }
    }
  }
`
