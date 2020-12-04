export const schema = gql`
  type Task {
    id: Int!
    summary: String!
    created: DateTime!
    completed: DateTime
    due: DateTime
    details: String
  }

  type Query {
    tasks: [Task!]!
    task(id: Int!): Task
  }

  input CreateTaskInput {
    summary: String!
    created: DateTime!
    completed: DateTime
    due: DateTime
    details: String
  }

  input UpdateTaskInput {
    summary: String
    created: DateTime
    completed: DateTime
    due: DateTime
    details: String
  }

  type Mutation {
    createTask(input: CreateTaskInput!): Task!
    updateTask(id: Int!, input: UpdateTaskInput!): Task!
    deleteTask(id: Int!): Task!
  }
`
