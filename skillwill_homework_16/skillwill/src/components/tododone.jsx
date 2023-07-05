import React from 'react'
import { Button, Buttons , Todos} from '../styles/styled'

const tododone = ({id,desc,action, action2}) => {
    const name = 'tododone'
    return (    
          <Todos color={name === 'tododone' ? '#f7ca16' : 'white'}>
              <div>
              <p><b>Started:</b> {desc}</p>
              </div>
              <Buttons>
              <Button onClick={() => action2(id)}>back</Button>
              <Button onClick={() => action(id)}>Done</Button>
              </Buttons>
          </Todos>
      )
    }

export default React.memo(tododone)