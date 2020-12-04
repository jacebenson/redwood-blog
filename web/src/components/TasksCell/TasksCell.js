import { Link, routes } from '@redwoodjs/router'

import Tasks from 'src/components/Tasks'

export const QUERY = gql`
  query TASKS {
    tasks {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No tasks yet. '}
      <Link to={routes.newTask()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ tasks }) => {
  return <Tasks tasks={tasks} />
}
