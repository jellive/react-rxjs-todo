import React from 'react'
import CSS from 'csstype'

interface TodoWrapProps {
  children: React.ReactNode,
  style: CSS.Properties
}

const TodoWrap: React.FC<TodoWrapProps> = props => {
  return (
    <div style={props.style}>
      {props.children}
    </div>
  )
}

export default React.memo(TodoWrap)