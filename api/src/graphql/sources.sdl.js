export const schema = gql`
  type Source {
    id: Int!
    author: String!
    created: DateTime!
    lastRun: DateTime
    sourceType: String!
    url: String!
  }

  type Query {
    sources: [Source!]!
    source(id: Int!): Source
  }

  input CreateSourceInput {
    author: String!
    created: DateTime!
    lastRun: DateTime
    sourceType: String!
    url: String!
  }

  input UpdateSourceInput {
    author: String
    created: DateTime
    lastRun: DateTime
    sourceType: String
    url: String
  }

  type Mutation {
    createSource(input: CreateSourceInput!): Source!
    updateSource(id: Int!, input: UpdateSourceInput!): Source!
    deleteSource(id: Int!): Source!
  }
`
