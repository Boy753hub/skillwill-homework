import React, { useCallback, useState } from 'react';
import Todo from './todo';
import Tododone from './tododone';

const Todolist = () => {
  const [inputValue, setInputValue] = useState('')
  const [list, setList] = useState([
    { id: 1, desc: 'get a haircut' },
    { id: 2, desc: 'shower' },
  ]);
  const [doneList, setDoneList] = useState([])

  const handleChange = (event) => {
    const value = event.target.value
    setInputValue(value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const job = {
      id: list.length + doneList.length + 1,
      desc: inputValue,
    }

    setList((prevList) => [...prevList, job])
    setInputValue('')
  }

  const moveToDone = useCallback((id) => {
      const doneJob = list.find((obj) => obj.id === id)
      setDoneList((prevDoneList) => [...prevDoneList, doneJob])
      setList((prevList) => prevList.filter((data) => data.id !== id))
    },
    [list]
  )

  const deleteFromDone = useCallback((id) => {
      setDoneList((prevDoneList) => prevDoneList.filter((data) => data.id !== id));
    },[])

  const moveTodoToDone = (id) => {
      const todoJob = doneList.find((obj) => obj.id === id)
      setList((prevList) => [...prevList, todoJob])
      deleteFromDone(todoJob.id)
    }
  return (
    <div className="ppa">
      <div className="formlist">
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleChange} value={inputValue} />
          <button type="submit">Add a job</button>
        </form>
        {list.map((job) => (
          <Todo key={job.id} id={job.id} desc={job.desc} action={moveToDone} />
        ))}
      </div>
      <div className="formlist">
        {doneList.map((job) => (
          <Tododone
            key={job.id}
            id={job.id}
            desc={job.desc}
            action={deleteFromDone}
            action2={moveTodoToDone}
          />
        ))}
      </div>
    </div>
  );
};

export default Todolist;
