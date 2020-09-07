import React, { useEffect, useState } from 'react'
import { TodoService } from '../services/TodoServices'
import { TodoItem } from '../models/TodoItem'
import TodoList from '../containers/TodoList'
import { Subscription } from 'rxjs'

const TodoPage: React.FC = () => {
  const [todos, setTodos] = useState()

  useEffect(() => { // useEffect는 didmount, didupdate, willunmount가 합쳐진 것으로 생각해도 됨. eg:https://ko.reactjs.org/docs/hooks-effect.html
    const todoData$: Subscription = TodoService.todoData$
      .subscribe((v: TodoItem[]) => {
        setTodos(v)
      })
    return () => {
      todoData$.unsubscribe()
    }
  }, [])

  return (
    <TodoList todos={todos} />
  )
}

export default TodoPage