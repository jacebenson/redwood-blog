import TasksLayout from 'src/layouts/TasksLayout'
import EditTaskCell from 'src/components/EditTaskCell'

const EditTaskPage = ({ id }) => {
  return (
    <TasksLayout>
      <EditTaskCell id={id} />
    </TasksLayout>
  )
}

export default EditTaskPage
