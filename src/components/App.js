import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import TodoSorting from '../containers/TodoSorting';

const App = () => (
  <div>
    <AddTodo />
    <TodoSorting />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
