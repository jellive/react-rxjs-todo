import React from 'react'
import { TodoItem } from '../models/TodoItem'
import { kToggleCheckBox } from '../contstants'

interface TodoToggleProps {
  onToggle: (id: number, checked: boolean) => void,
  todo: TodoItem
}

const TodoToggle: React.FC<TodoToggleProps> = ({ onToggle, todo }) => {
  const changeIsDone = (e: any) => onToggle(todo.id, e.target.checked)

  return (
    <input type="checkbox"
      style={kToggleCheckBox}
      checked={todo.isDone}
      onChange={changeIsDone}
    />
  )
}

export default React.memo(TodoToggle)