export const schema = gql`
  type Item {
    id: Int!
    author: String!
    url: String!
  }

  type Query {
    items: [Item!]!
    item(id: Int!): Item
  }

  input CreateItemInput {
    author: String!
    url: String!
  }

  input UpdateItemInput {
    author: String
    url: String
  }

  type Mutation {
    createItem(input: CreateItemInput!): Item!
    updateItem(id: Int!, input: UpdateItemInput!): Item!
    deleteItem(id: Int!): Item!
  }
`
