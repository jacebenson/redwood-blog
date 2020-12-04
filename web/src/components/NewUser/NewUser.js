import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import UserForm from 'src/components/UserForm'

import { QUERY } from 'src/components/UsersCell'

const CREATE_USER_MUTATION = gql`
  mutation CreateUserMutation($input: CreateUserInput!) {
    createUser(input: $input) {
      id
    }
  }
`

const NewUser = () => {
  const { addMessage } = useFlash()
  const [createUser, { loading, error }] = useMutation(CREATE_USER_MUTATION, {
    onCompleted: () => {
      navigate(routes.users())
      addMessage('User created.', { classes: 'rw-flash-success' })
    },
  })

  const onSave = (input) => {
    createUser({ variables: { input } })
  }
  const defaultValues = (()=>{
    let now = new Date()
    let twoDaysFromNow = new Date();
    twoDaysFromNow.setDate(twoDaysFromNow.getDate()+2);
    twoDaysFromNow = twoDaysFromNow.toISOString()
    return {
      "email": now.getHours() + ":" + now.getMinutes() + "@example.com",
      "name": "Jace"
    }
  })()
  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New User</h2>
      </header>
      <div className="rw-segment-main">
        <UserForm onSave={onSave} loading={loading} error={error} user={defaultValues} />
      </div>
    </div>
  )
}

export default NewUser
