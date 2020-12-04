import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import TaskForm from 'src/components/TaskForm'

import { QUERY } from 'src/components/TasksCell'

const CREATE_TASK_MUTATION = gql`
  mutation CreateTaskMutation($input: CreateTaskInput!) {
    createTask(input: $input) {
      id
    }
  }
`

const NewTask = () => {
  const { addMessage } = useFlash()
  const [createTask, { loading, error }] = useMutation(CREATE_TASK_MUTATION, {
    onCompleted: () => {
      navigate(routes.tasks())
      addMessage('Task created.', { classes: 'rw-flash-success' })
    },
  })

  const onSave = (input) => {
    console.log('input', input)
    if(input.completed===""){
      delete input.completed
    }
    if(input.details){
      try{
        let details = JSON.parse(input.details);
      } catch(e){
        throw e;
      }
    }
    createTask({ variables: { input } })

  }

  const defaultValues = (()=>{
    let now = new Date().toISOString()
    let twoDaysFromNow = new Date();
    twoDaysFromNow.setDate(twoDaysFromNow.getDate()+2);
    twoDaysFromNow = twoDaysFromNow.toISOString()
    return {
      "summary": "Do this",
      "created": now,
      "due": twoDaysFromNow,
      "completed": null
    }
  })()
  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Task</h2>
      </header>
      <div className="rw-segment-main">
        <TaskForm  onSave={onSave} loading={loading} error={error} task={defaultValues}/>
      </div>
    </div>
  )
}

export default NewTask
