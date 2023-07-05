import React from 'react';
import { Button ,Todos} from '../styles/styled'

const Todo = ({ id, desc, action }) => {
  // console.log(1)
  const name = 'todo'
  return (
    <Todos color={name === 'todo' ? '#dc5038' : 'white'}>
      <div>
        <p><b>todo:</b> {desc}</p>
      </div>
      <div>
        <Button onClick={() => action(id)}>Start</Button>
      </div>
    </Todos>
  );
};

export default React.memo(Todo);
