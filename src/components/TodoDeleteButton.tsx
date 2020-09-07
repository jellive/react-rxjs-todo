import React from 'react'
import { kButton } from '../contstants'

interface TodoDeleteButtonProps {
  onDelete: (id: number) => void
  todoId: number
}

const TodoDeleteButton: React.FC<TodoDeleteButtonProps> = ({ onDelete, todoId }) => {
  return (
    <button style={kButton} onClick={() => onDelete(todoId)}>삭제</button>
  )
}

export default React.memo(TodoDeleteButton)