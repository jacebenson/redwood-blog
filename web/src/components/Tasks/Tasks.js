import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/TasksCell'

const DELETE_TASK_MUTATION = gql`
  mutation DeleteTaskMutation($id: Int!) {
    deleteTask(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
}

const timeTag = (datetime) => {
  let padLeft = (input) => {
    input = input.toString();
    if(input.length === 1){
      input = "0" + input
    }
    return input
  }
  let dateTimeElement
  if(datetime){
    let parsedDate = new Date(datetime)
    let date = parsedDate.getFullYear() + '-'
    date += padLeft(parsedDate.getMonth()+1) + '-'
    date += padLeft(parsedDate.getDate())
    let time = parsedDate.toLocaleTimeString()
    dateTimeElement = (
    <time dateTime={datetime} title={datetime}>
      {date + ' ' + time}

    </time>)
  }
  return (
    dateTimeElement
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const TasksList = ({ tasks }) => {
  const { addMessage } = useFlash()
  const [deleteTask] = useMutation(DELETE_TASK_MUTATION, {
    onCompleted: () => {
      addMessage('Task deleted.', { classes: 'rw-flash-success' })
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete task ' + id + '?')) {
      deleteTask({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Summary</th>
            <th>Created</th>
            <th>Completed</th>
            <th>Due</th>
            <th>Details</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{truncate(task.id)}</td>
              <td>{truncate(task.summary)}</td>
              <td>{timeTag(task.created)}</td>
              <td>{timeTag(task.completed)}</td>
              <td>{timeTag(task.due)}</td>
              <td>{truncate(task.details)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.task({ id: task.id })}
                    title={'Show task ' + task.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editTask({ id: task.id })}
                    title={'Edit task ' + task.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete task ' + task.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(task.id)}
                  >
                    Delete
                  </a>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TasksList
