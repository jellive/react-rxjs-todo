import React from 'react'
import { TodoItem } from '../models/TodoItem'
import { kTodoContentTitle } from '../contstants'

interface TodoProps {
  todoItem: TodoItem
}

const Todo: React.FC<TodoProps> = ({ todoItem }) => {
  return (
    <p style={{ ...kTodoContentTitle, textDecoration: todoItem.isDone ? 'line-through' : 'none' }}>{todoItem.content}</p>
  )
}

export default React.memo(Todo)