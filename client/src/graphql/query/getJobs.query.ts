import gql from 'graphql-tag'

export default gql`
  query getJobs {
    allJobs {
      nodes {
        id
        name
        description
        salary
        datePosted
        account_verified
        createdAt
      }
    }
  }
`
