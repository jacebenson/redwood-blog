import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import SourceForm from 'src/components/SourceForm'

import { QUERY } from 'src/components/SourcesCell'

const CREATE_SOURCE_MUTATION = gql`
  mutation CreateSourceMutation($input: CreateSourceInput!) {
    createSource(input: $input) {
      id
    }
  }
`

const NewSource = () => {
  const { addMessage } = useFlash()
  const [createSource, { loading, error }] = useMutation(
    CREATE_SOURCE_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.sources())
        addMessage('Source created.', { classes: 'rw-flash-success' })
      },
    }
  )

  const onSave = (input) => {
    createSource({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Source</h2>
      </header>
      <div className="rw-segment-main">
        <SourceForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewSource
