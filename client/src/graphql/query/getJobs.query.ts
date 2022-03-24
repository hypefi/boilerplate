import gql from 'graphql-tag'

export default gql`
  query getJobs {
    allJobs {
      nodes {
        email
        id
        name
        createdAt
      }
    }
  }
`
