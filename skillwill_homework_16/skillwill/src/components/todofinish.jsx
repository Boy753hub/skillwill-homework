import React from 'react'
import { Button, Todos } from '../styles/styled'

const todofinish = ({ id, desc, action }) => {
  const name = 'todofinish'
  return (
    <Todos color={name === 'todofinish' ? '#95cb5a' : 'white'}>
    <div>
      <p><b>Done:</b> {desc}</p>
    </div>
    <div>
      <Button onClick={() => action(id)}>Delete</Button>
    </div>
  </Todos>
  )
}

export default todofinish