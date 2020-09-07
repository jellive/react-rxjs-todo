import React from 'react'
import { TodoItem } from '../models/TodoItem'
import Todo from '../components/Todo'
import { TodoService } from '../services/TodoServices'
import { kListWrap, kTodoContentWrap, kButtonWrap } from '../contstants'
import { TodoWrap, TodoDeleteButton, TodoAdd, TodoToggle } from '../components'

interface TodoListProps {
  todos: TodoItem[]
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {

  const deleteTodoItem = (id: number) => TodoService.delTodo(id)
  const addTodoItem = (content: string) => TodoService.addTodo(content)
  const onToggle = (id: number, checked: boolean) => TodoService.toggleIsDone(id, checked)

  return (
    <TodoWrap style={kListWrap}>
      <TodoAdd addTodo={addTodoItem} />
      {!!todos && todos.map((item: TodoItem) =>
        <TodoWrap style={kTodoContentWrap} key={item.id}>
          <Todo todoItem={item}></Todo>
          <TodoWrap style={kButtonWrap}>
            <TodoDeleteButton
              onDelete={deleteTodoItem}
              todoId={item.id}
            />
            <TodoToggle
              onToggle={onToggle}
              todo={item}
            />
          </TodoWrap>
        </TodoWrap>
      )}
    </TodoWrap>
  )
}

export default React.memo(TodoList)