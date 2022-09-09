import { GraphQLClient } from 'graphql-request'

const endpoint = process.env.GRAPHCMS_API_ENDPOINT ?? ''
const authToken = process.env.GRAPHCMS_API_TOKEN ?? ''

export const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${authToken}`
  }
})
