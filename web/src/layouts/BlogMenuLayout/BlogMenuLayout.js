import { Link, routes } from '@redwoodjs/router'
const BlogMenuLayout = ({ children }) => {
  return <header>
    <ul>
      <li><Link to={routes.home()}>Home</Link></li>
      <li><Link to={routes.tasks()}>Tasks</Link></li>
      <li><Link to={routes.users()}>Users</Link></li>
    </ul>
  </header>
}

export default BlogMenuLayout
