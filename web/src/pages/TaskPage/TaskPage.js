import TasksLayout from 'src/layouts/TasksLayout'
import TaskCell from 'src/components/TaskCell'

const TaskPage = ({ id }) => {
  return (
    <TasksLayout>
      <TaskCell id={id} />
    </TasksLayout>
  )
}

export default TaskPage
