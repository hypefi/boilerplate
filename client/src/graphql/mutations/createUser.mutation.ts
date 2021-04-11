import gql from 'graphql-tag'

export default gql`
    mutation createUser($user: UserInput!) {
        createUser(input: { user: $user }) {
            clientMutationId
        }
    }
`
