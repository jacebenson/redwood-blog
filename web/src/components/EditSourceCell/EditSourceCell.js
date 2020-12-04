import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import SourceForm from 'src/components/SourceForm'

export const QUERY = gql`
  query FIND_SOURCE_BY_ID($id: Int!) {
    source: source(id: $id) {
      id
      author
      created
      lastRun
      sourceType
      url
    }
  }
`
const UPDATE_SOURCE_MUTATION = gql`
  mutation UpdateSourceMutation($id: Int!, $input: UpdateSourceInput!) {
    updateSource(id: $id, input: $input) {
      id
      author
      created
      lastRun
      sourceType
      url
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ source }) => {
  const { addMessage } = useFlash()
  const [updateSource, { loading, error }] = useMutation(
    UPDATE_SOURCE_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.sources())
        addMessage('Source updated.', { classes: 'rw-flash-success' })
      },
    }
  )

  const onSave = (input, id) => {
    updateSource({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Source {source.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <SourceForm
          source={source}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
