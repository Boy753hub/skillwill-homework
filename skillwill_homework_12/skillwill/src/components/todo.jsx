import React from 'react'

const todo = ({id,desc,action}) => {
  return (
    <div className='todo'>
        <div>
        <p><b>todo:</b> {desc}</p>
        </div>
        <div>
        <button onClick={() => action(id)}>Done</button>
        </div>
    </div>
  )
}

export default todo