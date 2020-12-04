// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/items/new" page={NewItemPage} name="newItem" />
      <Route path="/items/{id:Int}/edit" page={EditItemPage} name="editItem" />
      <Route path="/items/{id:Int}" page={ItemPage} name="item" />
      <Route path="/items" page={ItemsPage} name="items" />
      <Route path="/sources/new" page={NewSourcePage} name="newSource" />
      <Route path="/sources/{id:Int}/edit" page={EditSourcePage} name="editSource" />
      <Route path="/sources/{id:Int}" page={SourcePage} name="source" />
      <Route path="/sources" page={SourcesPage} name="sources" />
      <Route path="/users/new" page={NewUserPage} name="newUser" />
      <Route path="/users/{id:Int}/edit" page={EditUserPage} name="editUser" />
      <Route path="/users/{id:Int}" page={UserPage} name="user" />
      <Route path="/users" page={UsersPage} name="users" />
      <Route path="/tasks/new" page={NewTaskPage} name="newTask" />
      <Route path="/tasks/{id:Int}/edit" page={EditTaskPage} name="editTask" />
      <Route path="/tasks/{id:Int}" page={TaskPage} name="task" />
      <Route path="/tasks" page={TasksPage} name="tasks" />
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
