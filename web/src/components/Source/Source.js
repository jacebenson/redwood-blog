import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes, navigate } from '@redwoodjs/router'

import { QUERY } from 'src/components/SourcesCell'

const DELETE_SOURCE_MUTATION = gql`
  mutation DeleteSourceMutation($id: Int!) {
    deleteSource(id: $id) {
      id
    }
  }
`

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const Source = ({ source }) => {
  const { addMessage } = useFlash()
  const [deleteSource] = useMutation(DELETE_SOURCE_MUTATION, {
    onCompleted: () => {
      navigate(routes.sources())
      addMessage('Source deleted.', { classes: 'rw-flash-success' })
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete source ' + id + '?')) {
      deleteSource({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Source {source.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{source.id}</td>
            </tr>
            <tr>
              <th>Author</th>
              <td>{source.author}</td>
            </tr>
            <tr>
              <th>Created</th>
              <td>{timeTag(source.created)}</td>
            </tr>
            <tr>
              <th>Last run</th>
              <td>{timeTag(source.lastRun)}</td>
            </tr>
            <tr>
              <th>Source type</th>
              <td>{source.sourceType}</td>
            </tr>
            <tr>
              <th>Url</th>
              <td>{source.url}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editSource({ id: source.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(source.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default Source
