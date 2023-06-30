import React from 'react';

const Todo = ({ id, desc, action }) => {
  // console.log(1)
  return (
    <div className='todo'>
      <div>
        <p><b>todo:</b> {desc}</p>
      </div>
      <div>
        <button onClick={() => action(id)}>Done</button>
      </div>
    </div>
  );
};

export default React.memo(Todo);
