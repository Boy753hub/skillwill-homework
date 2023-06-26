import React from 'react'

const tododone = ({id,desc,action, action2}) => {
    console.log(2)
    return (    
          <div className='todo'>
              <div>
              <p><b>Done:</b> {desc}</p>
              </div>
              <div className='buttons'>
              <button onClick={() => action2(id)}>back</button>
              <button onClick={() => action(id)}>Delete</button>
              </div>
          </div>
      )
    }

export default React.memo(tododone)