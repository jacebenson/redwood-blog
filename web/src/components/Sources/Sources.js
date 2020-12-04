import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/SourcesCell'

const DELETE_SOURCE_MUTATION = gql`
  mutation DeleteSourceMutation($id: Int!) {
    deleteSource(id: $id) {
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
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const SourcesList = ({ sources }) => {
  const { addMessage } = useFlash()
  const [deleteSource] = useMutation(DELETE_SOURCE_MUTATION, {
    onCompleted: () => {
      addMessage('Source deleted.', { classes: 'rw-flash-success' })
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete source ' + id + '?')) {
      deleteSource({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Author</th>
            <th>Created</th>
            <th>Last run</th>
            <th>Source type</th>
            <th>Url</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {sources.map((source) => (
            <tr key={source.id}>
              <td>{truncate(source.id)}</td>
              <td>{truncate(source.author)}</td>
              <td>{timeTag(source.created)}</td>
              <td>{timeTag(source.lastRun)}</td>
              <td>{truncate(source.sourceType)}</td>
              <td>{truncate(source.url)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.source({ id: source.id })}
                    title={'Show source ' + source.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editSource({ id: source.id })}
                    title={'Edit source ' + source.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete source ' + source.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(source.id)}
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

export default SourcesList
