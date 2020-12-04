import Task from 'src/components/Task'

export const QUERY = gql`
  query FIND_TASK_BY_ID($id: Int!) {
    task: task(id: $id) {
      id
      summary
      created
      completed
      due
      details
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Task not found</div>

export const Success = ({ task }) => {
  return <Task task={task} />
}
