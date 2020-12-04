import { Link, routes } from '@redwoodjs/router'
import { Flash } from '@redwoodjs/web'
import BlogLayout from 'src/layouts/BlogLayout'

const TasksLayout = (props) => {
  return (
    <BlogLayout>
    <div className="rw-scaffold">
      <Flash timeout={1000} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.tasks()} className="rw-link">
            Tasks
          </Link>
        </h1>
        <Link to={routes.newTask()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div> New Task
        </Link>
      </header>
      <main className="rw-main">{props.children}</main>
    </div>
    </BlogLayout>
  )
}

export default TasksLayout
