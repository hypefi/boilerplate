import gql from 'graphql-tag'

export default gql`
mutation MyMutation {
  createUser(input: {user: {name: "lamartiniere", email: "lamartiniere@gmail.com", password: "125123698457"}}
  ) {
    user {
      id
      name
      email
      password
      createdAt
    }
  }
}
`

