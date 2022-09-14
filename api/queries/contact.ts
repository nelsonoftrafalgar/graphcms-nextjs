import { gql } from 'graphql-request'

export const contact = gql`
  query ($page: String!) {
    selects(where: { page: $page }) {
      selectOptions {
        id
        value
      }
      name
    }
  }
`
