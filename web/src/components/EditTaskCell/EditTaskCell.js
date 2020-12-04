import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import TaskForm from 'src/components/TaskForm'

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
const UPDATE_TASK_MUTATION = gql`
  mutation UpdateTaskMutation($id: Int!, $input: UpdateTaskInput!) {
    updateTask(id: $id, input: $input) {
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

export const Success = ({ task }) => {
  const { addMessage } = useFlash()
  const [updateTask, { loading, error }] = useMutation(UPDATE_TASK_MUTATION, {
    onCompleted: () => {
      navigate(routes.tasks())
      addMessage('Task updated.', { classes: 'rw-flash-success' })
    },
  })

  const onSave = (input, id) => {
    updateTask({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Task {task.id}</h2>
      </header>
      <div className="rw-segment-main">
        <TaskForm task={task} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
